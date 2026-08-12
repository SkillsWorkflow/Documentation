#!/usr/bin/env node

/**
 * Frontmatter `description:` Backfill
 *
 * Docusaurus uses `description` for the page's <meta name="description">, its
 * Open Graph tag and its search-result snippet. Retrieval systems lean on the
 * same field. Without it, Docusaurus falls back to the first ~160 characters of
 * the rendered body, which on these pages is often a bare instruction with no
 * indication of what the page is about.
 *
 * This derives a one-sentence description from each page's own opening content
 * and writes it into the frontmatter. It never overwrites an existing
 * `description:`, and skips pages where nothing usable could be derived.
 *
 * Dry run (default — prints what would change, writes nothing):
 *   node scripts/backfill-descriptions.mjs
 *   node scripts/backfill-descriptions.mjs --filter=docs/university --all
 *
 * Apply:
 *   node scripts/backfill-descriptions.mjs --write
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DOCS_DIR = resolve(ROOT, 'docs');

const WRITE = process.argv.includes('--write');
const SHOW_ALL = process.argv.includes('--all');
const FILTER = (process.argv.find((a) => a.startsWith('--filter=')) || '').slice('--filter='.length);

// Never touch these — partials are fragments; to-review is excluded sitewide.
const SKIP_SEGMENTS = ['_partials', 'to-review'];

const MIN_LENGTH = 30;
const MAX_LENGTH = 160;

// ---------------------------------------------------------------------------

function walk(dir) {
    const out = [];
    for (const entry of readdirSync(dir)) {
        const full = resolve(dir, entry);
        if (statSync(full).isDirectory()) {
            if (SKIP_SEGMENTS.includes(entry)) continue;
            out.push(...walk(full));
        } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
            out.push(full);
        }
    }
    return out;
}

function splitFrontmatter(raw) {
    const m = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n)?/.exec(raw);
    if (!m) return null;
    return { block: m[1], body: raw.slice(m[0].length) };
}

/** Remove markup that should never contribute to a summary. */
function clean(chunk) {
    return (
        chunk
            .replace(/^\s*(import|export)\s.+$/gm, '')
            .replace(/<figure>[\s\S]*?<\/figure>/g, '')
            // Tables flatten into an unreadable run of cell values
            // ("Property Description CreateVersion text Assign text…").
            .replace(/<table[\s\S]*?<\/table>/gi, '')
            .replace(/```[\s\S]*?```/g, '')
            // Admonition blocks carry caveats and editorial notes, which make a
            // poor summary of what the page is about. Drop them, content and all.
            .replace(/^:::\w[^\n]*\n[\s\S]*?^:::[ \t]*$/gm, '')
            .replace(/^:::.*$/gm, '')
            .replace(/<\/?[A-Za-z][^>]*>/g, '')
            .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    );
}

/** Split cleaned text into prose paragraphs and list items. */
function classify(chunk) {
    const prose = [];
    const listItems = [];
    for (const raw of clean(chunk).split(/\r?\n/)) {
        const line = raw.trim();
        if (!line) continue;
        if (/^[#>|]/.test(line)) continue; // heading, blockquote, table row
        const li = /^(?:[-*+]\s+|\d+[.)]\s+)(.*)$/.exec(line);
        if (li) {
            if (li[1].trim()) listItems.push(li[1].trim());
            continue;
        }
        prose.push(line);
    }
    return { prose, listItems };
}

function flatten(text) {
    return text
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → their text
        .replace(/[*_`]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Pick the best source text: the page's intro (everything before the first
 * sub-heading) is preferred, since that is where a page states its purpose.
 * Prose beats list items; a step-by-step page whose intro is a numbered list
 * still yields "To create a new Activity, navigate to the Lead."
 */
function sourceText(body) {
    const firstHeading = body.search(/^#{2,6}\s/m);
    const intro = firstHeading === -1 ? body : body.slice(0, firstHeading);

    for (const chunk of [intro, body]) {
        const { prose, listItems } = classify(chunk);
        if (prose.length) return flatten(prose.join(' '));
        if (listItems.length) return flatten(listItems.join(' '));
    }
    return '';
}

function deriveDescription(body, title) {
    let text = sourceText(body);
    if (!text) return null;

    // Repo-wide boilerplate opener — the sentence after it is the informative one.
    const withoutBoilerplate = text.replace(/^This (article|document|page) describes[^.]*\.\s*/i, '').trim();
    if (withoutBoilerplate.length >= MIN_LENGTH) text = withoutBoilerplate;

    // MDX hero components flatten to their own heading text, repeating the page
    // title and often an eyebrow above it ("AI Assistant Workflow Assistant …").
    // Cut up to and including the title when it appears near the start — but only
    // if what follows still opens a sentence, so prose that legitimately begins
    // with the title ("Rate Cards are prices/costs for…") is left alone.
    if (title) {
        const idx = text.toLowerCase().indexOf(title.toLowerCase());
        if (idx !== -1 && idx <= 40) {
            const rest = text.slice(idx + title.length).replace(/^[\s·—–-]+/, '');
            if (rest && /^[A-Z0-9“"']/.test(rest)) text = rest;
        }
    }

    // Prefer whole sentences up to the limit.
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let out = '';
    for (const s of sentences) {
        const candidate = (out ? `${out} ${s}` : s).trim();
        if (candidate.length > MAX_LENGTH) break;
        out = candidate;
        if (out.length >= MIN_LENGTH) break;
    }
    if (!out) out = sentences[0].trim();
    if (out.length > MAX_LENGTH) out = `${out.slice(0, MAX_LENGTH - 1).replace(/\s+\S*$/, '')}…`;

    out = out.trim();
    if (out.length < MIN_LENGTH) return null;

    // Emitted as a double-quoted YAML scalar. Fold inner quotes to typographic
    // ones rather than backslash-escaping, which would litter the source.
    return out
        .replace(/\\/g, '')
        .replace(/"([^"]*)"/g, '“$1”')
        .replace(/"/g, '”');
}

// ---------------------------------------------------------------------------

const stats = { written: 0, hadDescription: 0, noUsableText: 0, noFrontmatter: 0 };
const samples = [];

for (const file of walk(DOCS_DIR)) {
    const rel = relative(ROOT, file).split(sep).join('/');
    if (FILTER && !rel.includes(FILTER)) continue;

    const raw = readFileSync(file, 'utf8');
    const fm = splitFrontmatter(raw);

    if (!fm) {
        stats.noFrontmatter += 1;
        continue;
    }
    if (/^description:/m.test(fm.block)) {
        stats.hadDescription += 1;
        continue;
    }

    const titleLine = /^title:\s*(.*)$/m.exec(fm.block);
    const title = (titleLine ? titleLine[1] : '').trim().replace(/^['"]|['"]$/g, '');

    const description = deriveDescription(fm.body, title);
    if (!description) {
        stats.noUsableText += 1;
        continue;
    }

    const lines = fm.block.split(/\r?\n/);
    const titleIdx = lines.findIndex((l) => /^title:/.test(l));
    lines.splice(titleIdx !== -1 ? titleIdx + 1 : lines.length, 0, `description: "${description}"`);

    if (WRITE) writeFileSync(file, `---\n${lines.join('\n')}\n---\n${fm.body}`, 'utf8');

    stats.written += 1;
    if (SHOW_ALL || samples.length < 10) samples.push({ rel, description });
}

console.log(WRITE ? '[descriptions] APPLIED\n' : '[descriptions] DRY RUN — pass --write to apply\n');
for (const s of samples) console.log(`  ${s.rel}\n    → ${s.description}\n`);
console.log(`  ${WRITE ? 'wrote' : 'would write'} : ${stats.written}`);
console.log(`  already had  : ${stats.hadDescription}`);
console.log(`  no usable text: ${stats.noUsableText}`);
console.log(`  no frontmatter: ${stats.noFrontmatter}`);
