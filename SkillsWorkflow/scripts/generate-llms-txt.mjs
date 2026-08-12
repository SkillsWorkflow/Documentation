#!/usr/bin/env node

/**
 * llms.txt Generator
 *
 * Emits two machine-readable entry points into build/, following the
 * convention at https://llmstxt.org:
 *
 *   llms.txt       A curated index — every page grouped by section, one line
 *                  each with its title, URL and one-line summary. Small enough
 *                  to drop whole into a prompt so a model can pick what to read.
 *
 *   llms-full.txt  The complete corpus as a single Markdown file, with the
 *                  navigation chrome, JSX and image markup stripped. Lets a
 *                  model answer without fetching 350+ HTML pages.
 *
 * Both are built from the Markdown sources, not the rendered HTML, so they
 * carry no sidebars, headers or footers.
 *
 * Content excluded from both (same rule as the sitemap and the search index):
 *   - docs/to-review/**  — unreviewed material migrated from the old Knowledge
 *                          Base; must never be quoted back as current docs
 *   - any page marked `unlisted: true` in its frontmatter
 *
 * Runs automatically after `npm run build`. Standalone:
 *   node scripts/generate-llms-txt.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DOCS_DIR = resolve(ROOT, 'docs');
const BUILD_DIR = resolve(ROOT, 'build');

const SITE_URL = 'https://documentation.skillsworkflow.com';
const SITE_NAME = "Skills Workflow Documentation";

// Sections excluded entirely — keep in step with `ignorePatterns` in the
// sitemap config and `excludeRoutes` in the lunr search config.
const EXCLUDED_PATH_SEGMENTS = ['to-review', '_partials'];

// Human-readable names for the top-level docs folders, in the order they
// should appear. Anything not listed here is appended alphabetically.
const SECTION_LABELS = [
    ['home', 'Getting Started'],
    ['university', 'Using Skills Workflow'],
    ['integrations', 'Integrations'],
    ['api', 'API'],
    ['sdk', 'SDK'],
    ['customization', 'Customization'],
    ['ai', 'AI'],
    ['trust', 'Trust, Security & Compliance'],
    ['documenting', 'Contributing to the Docs']
];

/** Recursively collect every Markdown file under a directory. */
function walk(dir) {
    const found = [];
    for (const entry of readdirSync(dir)) {
        const full = resolve(dir, entry);
        if (statSync(full).isDirectory()) {
            if (EXCLUDED_PATH_SEGMENTS.includes(entry)) continue;
            found.push(...walk(full));
        } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
            found.push(full);
        }
    }
    return found;
}

/** Split frontmatter from body. Returns { data, body }. */
function parseFrontmatter(raw) {
    const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
    if (!match) return { data: {}, body: raw };

    const data = {};
    for (const line of match[1].split(/\r?\n/)) {
        const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
        if (!kv) continue;
        let value = kv[2].trim();
        // strip matching surrounding quotes
        if (
            (value.startsWith('"') && value.endsWith('"') && value.length > 1) ||
            (value.startsWith("'") && value.endsWith("'") && value.length > 1)
        ) {
            value = value.slice(1, -1);
        }
        data[kv[1]] = value;
    }
    return { data, body: raw.slice(match[0].length) };
}

/**
 * Map a source file to its published URL path, honouring an explicit
 * frontmatter `slug`/`id` and Docusaurus' index-file behaviour.
 */
function toUrlPath(absPath, data) {
    // Some folders contain spaces (e.g. "time sheets"). Docusaurus publishes
    // those percent-encoded, so encode each segment to match the sitemap —
    // emitting raw spaces here would hand a model an unfetchable URL.
    const encodePath = (p) =>
        p
            .split('/')
            .map((seg) => encodeURIComponent(seg))
            .join('/');

    if (data.slug && data.slug.startsWith('/')) {
        return data.slug === '/' ? '/docs' : `/docs${encodePath(data.slug)}`;
    }

    let rel = relative(DOCS_DIR, absPath).split(sep).join('/');
    rel = rel.replace(/\.mdx?$/, '');

    const dir = rel.includes('/') ? rel.slice(0, rel.lastIndexOf('/')) : '';
    const base = rel.slice(rel.lastIndexOf('/') + 1);

    // `foo/index.md` and `foo/foo.md` both publish at `/docs/foo`
    if (base === 'index' || (dir && base === dir.slice(dir.lastIndexOf('/') + 1))) {
        return `/docs/${encodePath(dir)}`;
    }
    return `/docs/${encodePath(rel)}`;
}

/** Strip Markdown/JSX down to readable prose for the full-text corpus. */
function toPlainMarkdown(body) {
    return (
        body
            // import/export lines from MDX
            .replace(/^\s*(import|export)\s.+$/gm, '')
            // <figure>…</figure> blocks (screenshots with empty captions)
            .replace(/<figure>[\s\S]*?<\/figure>/g, '')
            // remaining self-closing or paired JSX/HTML tags, keeping inner text
            .replace(/<\/?[A-Za-z][^>]*>/g, '')
            // image markup — the alt text alone is rarely meaningful here
            .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
            // admonition fences (:::note … :::) — keep the text, drop the markers
            .replace(/^:::\s*\w+.*$/gm, '')
            .replace(/^:::$/gm, '')
            // collapse runs of blank lines
            .replace(/\n{3,}/g, '\n\n')
            .trim()
    );
}

/** First meaningful sentence of a page, for the index summary. */
function firstSentence(body, limit = 200) {
    const prose = toPlainMarkdown(body)
        .split(/\n/)
        .map((l) => l.trim())
        // skip headings, list items, table rows, code fences
        .filter((l) => l && !/^[#>|`\-*\d]/.test(l))
        .join(' ');
    if (!prose) return '';

    const sentence = /^(.+?[.!?])(\s|$)/.exec(prose);
    let out = sentence ? sentence[1] : prose;
    if (out.length > limit) out = `${out.slice(0, limit - 1).trimEnd()}…`;
    // markdown emphasis and inline code add noise to a one-line summary
    return out.replace(/[*_`]/g, '').trim();
}

function sectionOf(absPath) {
    const rel = relative(DOCS_DIR, absPath).split(sep);
    return rel.length > 1 ? rel[0] : 'root';
}

function labelFor(section) {
    const found = SECTION_LABELS.find(([key]) => key === section);
    if (found) return found[1];
    return section.charAt(0).toUpperCase() + section.slice(1).replace(/[-_]/g, ' ');
}

// ---------------------------------------------------------------------------

function main() {
    if (!existsSync(DOCS_DIR)) {
        console.error(`[llms.txt] docs directory not found at ${DOCS_DIR}`);
        process.exit(1);
    }

    const pages = [];
    let skippedUnlisted = 0;

    for (const file of walk(DOCS_DIR)) {
        const raw = readFileSync(file, 'utf8');
        const { data, body } = parseFrontmatter(raw);

        if (String(data.unlisted).toLowerCase() === 'true') {
            skippedUnlisted += 1;
            continue;
        }

        // `title: ""` is used on a few pages that render their own hero, so fall
        // through to the first H1, then sidebar_label, before the filename.
        const title =
            (data.title || '').trim() ||
            (/^#\s+(.+)$/m.exec(body)?.[1] ?? '').trim() ||
            (data.sidebar_label || '').trim() ||
            relative(DOCS_DIR, file).replace(/\.mdx?$/, '');

        pages.push({
            title: title.replace(/^['"]|['"]$/g, ''),
            url: `${SITE_URL}${toUrlPath(file, data)}`,
            summary: data.description || firstSentence(body),
            section: sectionOf(file),
            body: toPlainMarkdown(body)
        });
    }

    // Group by section, ordered per SECTION_LABELS then alphabetically.
    const order = SECTION_LABELS.map(([key]) => key);
    const sections = [...new Set(pages.map((p) => p.section))].sort((a, b) => {
        const ai = order.indexOf(a);
        const bi = order.indexOf(b);
        if (ai !== -1 && bi !== -1) return ai - bi;
        if (ai !== -1) return -1;
        if (bi !== -1) return 1;
        return a.localeCompare(b);
    });

    // --- llms.txt ---------------------------------------------------------
    const index = [
        `# ${SITE_NAME}`,
        '',
        '> Product documentation for Skills Workflow, the operations platform for',
        '> agencies — covering day-to-day use (projects, jobs, estimates, timesheets,',
        '> expenses, contracts), platform configuration, the public API and SDK, and',
        '> every supported third-party integration.',
        '',
        `Full text of every page below, as a single file: ${SITE_URL}/llms-full.txt`,
        '',
        'Notes for retrieval:',
        '- Each page is self-contained; the URL is stable and safe to cite.',
        '- Integration pages open with a plain-language product description and end',
        '  with a technical reference — quote the former to end users.',
        '- Content under /docs/to-review/ is unreviewed legacy material. It is excluded',
        '  from this index, the sitemap and site search, and should not be used.',
        ''
    ];

    for (const section of sections) {
        const inSection = pages
            .filter((p) => p.section === section)
            .sort((a, b) => a.title.localeCompare(b.title));
        if (!inSection.length) continue;

        index.push(`## ${labelFor(section)}`, '');
        for (const page of inSection) {
            index.push(page.summary ? `- [${page.title}](${page.url}): ${page.summary}` : `- [${page.title}](${page.url})`);
        }
        index.push('');
    }

    // --- llms-full.txt ----------------------------------------------------
    const full = [
        `# ${SITE_NAME} — Full Text`,
        '',
        `Source: ${SITE_URL}`,
        `Generated: ${new Date().toISOString().slice(0, 10)}`,
        `Pages: ${pages.length}`,
        '',
        'Every page below is delimited by a `---` rule followed by its title and',
        'canonical URL. Unreviewed legacy content (/docs/to-review/) is excluded.',
        ''
    ];

    for (const section of sections) {
        const inSection = pages
            .filter((p) => p.section === section)
            .sort((a, b) => a.title.localeCompare(b.title));
        if (!inSection.length) continue;

        full.push('', `# ${labelFor(section)}`, '');
        for (const page of inSection) {
            full.push('---', '', `## ${page.title}`, '', `URL: ${page.url}`, '');
            if (page.summary) full.push(`Summary: ${page.summary}`, '');
            full.push(page.body, '');
        }
    }

    if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

    const indexOut = resolve(BUILD_DIR, 'llms.txt');
    const fullOut = resolve(BUILD_DIR, 'llms-full.txt');
    writeFileSync(indexOut, `${index.join('\n')}\n`, 'utf8');
    writeFileSync(fullOut, `${full.join('\n')}\n`, 'utf8');

    const kb = (p) => `${(statSync(p).size / 1024).toFixed(0)} KB`;
    console.log(`[llms.txt] ${pages.length} pages across ${sections.length} sections`);
    if (skippedUnlisted) console.log(`[llms.txt] skipped ${skippedUnlisted} unlisted page(s)`);
    console.log(`[llms.txt] wrote build/llms.txt      (${kb(indexOut)})`);
    console.log(`[llms.txt] wrote build/llms-full.txt (${kb(fullOut)})`);
}

main();
