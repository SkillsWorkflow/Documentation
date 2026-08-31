#!/usr/bin/env node

/**
 * Translation Inventory
 *
 * Answers one question, per locale: what is not translated?
 *
 * It covers the two halves that fail independently, and which a build will
 * never complain about — Docusaurus silently falls back to English for both:
 *
 *   1. Documentation pages. An English page under docs/ with no counterpart
 *      under i18n/<locale>/docusaurus-plugin-content-docs/current/ is served
 *      in English inside an otherwise translated site.
 *
 *   2. Interface strings. The home page, navbar, footer and sidebar category
 *      labels live in i18n/<locale>/*.json. An entry whose message is still
 *      byte-identical to the English source has a key but no translation.
 *
 * It also reports two kinds of rot that look like coverage but are not:
 *
 *   - Stale pages: the English source has been committed more recently than
 *     its translation, so the translation describes an older product.
 *   - Orphan keys: an entry in a locale file with no matching key in the
 *     English extraction — a string that was renamed or deleted. Docusaurus
 *     warns about these on `write-translations` but does not remove them.
 *
 * The English baseline for interface strings is produced by Docusaurus's own
 * extractor rather than by parsing the source here, so the inventory cannot
 * drift from what the build actually reads. That writes i18n/en/, which this
 * script removes again — the default locale must not have translation files,
 * or edits to the source strings would be silently overridden by stale copies.
 *
 * Writes reports/i18n-inventory.md. Internal — reports/ is outside docs/, so
 * it is not built into the site.
 *
 *   node scripts/i18n-inventory.mjs
 */

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs';
import { resolve, dirname, relative, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'docs');
const LOCALES = ['pt', 'es', 'pt-br'];
const OUT = join(ROOT, 'reports', 'i18n-inventory.md');

/* Same exclusions as the sitemap, the search index and llms.txt: unreviewed
   legacy material and MDX partials are not pages, so they are not gaps. */
const EXCLUDED_SEGMENTS = ['to-review', '_partials'];

/* Strings that are correctly identical in every language — product nouns the
   WebApp itself leaves in English, plus proper names. Without this list they
   would show up as untranslated forever and train everyone to ignore the
   report. Compared case-insensitively against the English message. */
const SAME_IN_EVERY_LANGUAGE = new Set(
  [
    'api', 'sdk', 'client api', 'integration api', 'gantt', 'workspaces', 'workspace',
    'popular', 'mobile', 'skills workflow', 'facebook', 'instagram', 'linkedin',
    'youtube', 'twitter', 'github', 'blog', 'website', 'crm', 'rate cards',
    'copyright © 2026 skills workflow',
    /* Category labels the product itself leaves in English, plus vendor names. */
    'workflows', 'rates', 'queries', 'single sign-on', 'ui', 'primavera', 'sage',
    'isap', 'ceta', 'jam', 'eas', 'reach', 'utilpro', 'cloud storage',
    /* Kept as-is by the product in these languages, or nothing but interpolation. */
    'time sheets', 'fees', 'status', 'tags', 'tags:', '{authorname} - {nposts}'
  ].map((s) => s.toLowerCase())
);

const UI_FILES = [
  { file: 'code.json', label: 'Home page and other React pages' },
  { file: 'docusaurus-theme-classic/navbar.json', label: 'Navbar' },
  { file: 'docusaurus-theme-classic/footer.json', label: 'Footer' },
  { file: 'docusaurus-plugin-content-docs/current.json', label: 'Sidebar categories' }
];

// ── docs pages ─────────────────────────────────────────────────────────────

function walk(dir, base = dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (EXCLUDED_SEGMENTS.includes(entry)) continue;
      out.push(...walk(full, base));
    } else if (/\.mdx?$/.test(entry)) {
      out.push(relative(base, full));
    }
  }
  return out;
}

/* A page renamed from .md to .mdx (or the reverse) in one tree but not the
   other is still the same page — match on the path without its extension. */
const stem = (p) => p.replace(/\.mdx?$/, '');

function lastCommit(absPath) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%ct', '--', absPath], {
      cwd: ROOT,
      encoding: 'utf8'
    }).trim();
    return out ? Number(out) * 1000 : null;
  } catch {
    return null;
  }
}

function section(relPath) {
  const [first] = relPath.split(sep);
  return relPath.includes(sep) ? first : '(root)';
}

// ── interface strings ──────────────────────────────────────────────────────

function readJson(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

const messageOf = (entry) =>
  entry && typeof entry === 'object' ? entry.message : typeof entry === 'string' ? entry : undefined;

/**
 * Produces the English baseline with Docusaurus's own extractor, then removes
 * i18n/en again. Returns null if the extractor fails, so the report can say so
 * rather than silently omitting the whole interface half.
 */
function englishBaseline() {
  const enDir = join(ROOT, 'i18n', 'en');
  const preexisting = existsSync(enDir);
  if (preexisting) {
    console.error(
      '[i18n-inventory] i18n/en/ already exists. Refusing to overwrite or delete it.\n' +
        '                 The default locale should not carry translation files: they\n' +
        '                 override the source strings. Remove it, then re-run.'
    );
    return null;
  }
  try {
    execFileSync('npx', ['docusaurus', 'write-translations', '--locale', 'en'], {
      cwd: ROOT,
      stdio: 'pipe'
    });
    const baseline = {};
    for (const { file } of UI_FILES) baseline[file] = readJson(join(enDir, file)) ?? {};
    return baseline;
  } catch (err) {
    console.error(`[i18n-inventory] write-translations failed: ${err.message}`);
    return null;
  } finally {
    if (!preexisting) rmSync(enDir, { recursive: true, force: true });
  }
}

// ── terminology ────────────────────────────────────────────────────────────

/**
 * The product noun that moves most between locales, taken from the WebApp's
 * ClientApp/assets/i18n. A reader sees "Entrega" in the pt-PT interface, so a
 * pt page that says "Job" — or worse, the Brazilian "Atividade" — is naming
 * something the reader cannot find on screen.
 *
 * `foreign` are the same concept's words in the OTHER locales: finding one is
 * a translation copied across from the wrong Portuguese.
 */
const TERMINOLOGY = {
  pt: { expected: 'Entrega', english: ['Job', 'Jobs'], foreign: ['Atividade', 'Atividades'] },
  'pt-br': { expected: 'Atividade', english: ['Job', 'Jobs'], foreign: ['Entrega', 'Entregas'] },
  es: { expected: 'Job', english: [], foreign: ['Entrega', 'Entregas', 'Atividade'] }
};

function terminologyCheck(locale) {
  const dir = join(ROOT, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
  const rule = TERMINOLOGY[locale];
  const english = [];
  const foreign = [];
  for (const rel of walk(dir)) {
    /* Fenced code is API payloads and field names — `Job` there is the entity
       name and must stay English. */
    const body = readFileSync(join(dir, rel), 'utf8').replace(/```[\s\S]*?```/g, '');
    if (rule.english.some((w) => new RegExp(`\\b${w}\\b`).test(body))) english.push(rel);
    if (rule.foreign.some((w) => new RegExp(`\\b${w}\\b`).test(body))) foreign.push(rel);
  }
  return { expected: rule.expected, english, foreign };
}

// ── report ─────────────────────────────────────────────────────────────────

const pct = (n, total) => (total === 0 ? '—' : `${Math.round((n / total) * 100)}%`);

function main() {
  const englishPages = walk(DOCS).sort();
  const englishStems = new Map(englishPages.map((p) => [stem(p), p]));

  const docs = {};
  for (const locale of LOCALES) {
    const dir = join(ROOT, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
    const translated = new Set(walk(dir).map(stem));

    const missing = [];
    const stale = [];
    for (const [s, enPath] of englishStems) {
      if (!translated.has(s)) {
        missing.push(enPath);
        continue;
      }
      const enTime = lastCommit(join(DOCS, enPath));
      const locFile = walk(dir).find((p) => stem(p) === s);
      const locTime = locFile ? lastCommit(join(dir, locFile)) : null;
      if (enTime && locTime && enTime > locTime) {
        stale.push({ page: enPath, enTime, locTime });
      }
    }
    /* A page under i18n/ with nothing to translate from is a leftover: the
       English page was deleted or renamed and this one was not. */
    const orphanPages = [...translated].filter((s) => !englishStems.has(s));
    docs[locale] = { missing, stale, orphanPages, count: translated.size };
  }

  const baseline = englishBaseline();
  const ui = {};
  if (baseline) {
    for (const locale of LOCALES) {
      ui[locale] = UI_FILES.map(({ file, label }) => {
        const base = baseline[file] ?? {};
        const loc = readJson(join(ROOT, 'i18n', locale, file)) ?? {};
        const keys = Object.keys(base);
        const untranslated = [];
        for (const k of keys) {
          const en = messageOf(base[k]);
          const got = messageOf(loc[k]);
          if (got === undefined) {
            untranslated.push({ key: k, en, reason: 'absent' });
          } else if (en !== undefined && got === en && !SAME_IN_EVERY_LANGUAGE.has(String(en).toLowerCase())) {
            untranslated.push({ key: k, en, reason: 'same as English' });
          }
        }
        const orphans = Object.keys(loc).filter((k) => !(k in base));
        return { file, label, total: keys.length, untranslated, orphans };
      });
    }
  }

  // ── write ────────────────────────────────────────────────────────────────
  const L = [];
  const now = new Date().toISOString().slice(0, 10);
  L.push('# Translation Inventory — Skills Workflow Documentation');
  L.push('');
  L.push('**Internal working document.** Not published — `reports/` is outside `docs/`, so this');
  L.push('is not built into the site.');
  L.push('');
  L.push(`Generated ${now} by \`node scripts/i18n-inventory.mjs\`. Re-run it rather than editing`);
  L.push('this file by hand.');
  L.push('');
  L.push('Docusaurus falls back to English silently, for pages and for interface strings alike.');
  L.push('Nothing here breaks a build; the only way to see a gap is to count it.');
  L.push('');
  L.push('---');
  L.push('');
  L.push('## Where we stand');
  L.push('');
  L.push('| Locale | Pages translated | Interface strings translated |');
  L.push('| --- | --- | --- |');
  for (const locale of LOCALES) {
    const d = docs[locale];
    const done = englishStems.size - d.missing.length;
    let uiCell = 'not measured';
    if (ui[locale]) {
      const total = ui[locale].reduce((a, f) => a + f.total, 0);
      const missing = ui[locale].reduce((a, f) => a + f.untranslated.length, 0);
      uiCell = `${total - missing} / ${total} (${pct(total - missing, total)})`;
    }
    L.push(
      `| \`${locale}\` | ${done} / ${englishStems.size} (${pct(done, englishStems.size)}) | ${uiCell} |`
    );
  }
  L.push('');
  L.push(`English pages counted: **${englishStems.size}** (excluding \`to-review/\` and \`_partials/\`).`);
  L.push('');
  L.push('---');
  L.push('');

  // pages by section
  L.push('## Pages, by section');
  L.push('');
  L.push('Translated / total. A section at 0 is one no reader of that language can use at all.');
  L.push('');
  const sections = [...new Set(englishPages.map(section))].sort();
  L.push(`| Section | English | ${LOCALES.map((l) => `\`${l}\``).join(' | ')} |`);
  L.push(`| --- | --- | ${LOCALES.map(() => '---').join(' | ')} |`);
  for (const s of sections) {
    const total = englishPages.filter((p) => section(p) === s).length;
    const cells = LOCALES.map((locale) => {
      const missing = docs[locale].missing.filter((p) => section(p) === s).length;
      return `${total - missing} / ${total}`;
    });
    L.push(`| ${s} | ${total} | ${cells.join(' | ')} |`);
  }
  L.push('');
  L.push('---');
  L.push('');

  // stale
  L.push('## Stale translations');
  L.push('');
  L.push('The translation exists, but the English page has been committed more recently — so it');
  L.push('describes an older version of the product. These are worse than a missing page: the');
  L.push('reader has no way to tell.');
  L.push('');
  let anyStale = false;
  for (const locale of LOCALES) {
    const s = docs[locale].stale;
    if (!s.length) continue;
    anyStale = true;
    L.push(`### \`${locale}\` — ${s.length}`);
    L.push('');
    L.push('| Page | English updated | Translation updated |');
    L.push('| --- | --- | --- |');
    for (const { page, enTime, locTime } of s.sort((a, b) => b.enTime - a.enTime)) {
      const d = (t) => new Date(t).toISOString().slice(0, 10);
      L.push(`| \`${page}\` | ${d(enTime)} | ${d(locTime)} |`);
    }
    L.push('');
  }
  if (!anyStale) {
    L.push('None.');
    L.push('');
  }
  L.push('---');
  L.push('');

  // missing pages
  L.push('## Missing pages');
  L.push('');
  for (const locale of LOCALES) {
    const m = docs[locale].missing;
    L.push(`### \`${locale}\` — ${m.length} missing`);
    L.push('');
    if (!m.length) {
      L.push('None.');
      L.push('');
      continue;
    }
    let current = null;
    for (const page of m) {
      const s = section(page);
      if (s !== current) {
        if (current !== null) L.push('');
        L.push(`**${s}**`);
        L.push('');
        current = s;
      }
      L.push(`- \`${page}\``);
    }
    L.push('');
    const orphans = docs[locale].orphanPages;
    if (orphans.length) {
      L.push(`**Orphans** — translated pages whose English source no longer exists (${orphans.length}):`);
      L.push('');
      for (const o of orphans) L.push(`- \`${o}\``);
      L.push('');
    }
  }
  L.push('---');
  L.push('');

  // interface strings
  // terminology
  L.push('## Terminology drift');
  L.push('');
  L.push('The sidebar and the home page now name product objects the way the WebApp does in');
  L.push('each language. Pages translated before that do not always agree, which puts two names');
  L.push('for one object on the same screen.');
  L.push('');
  L.push('| Locale | Interface says | Pages using the English word | Pages using another locale\'s word |');
  L.push('| --- | --- | --- | --- |');
  const term = {};
  for (const locale of LOCALES) {
    term[locale] = terminologyCheck(locale);
    const t = term[locale];
    L.push(
      `| \`${locale}\` | ${t.expected} | ${t.english.length} | ${t.foreign.length} |`
    );
  }
  L.push('');
  for (const locale of LOCALES) {
    const t = term[locale];
    if (!t.english.length && !t.foreign.length) continue;
    L.push(`<details><summary><code>${locale}</code> — pages to review</summary>`);
    L.push('');
    if (t.english.length) {
      L.push(`Using the English word where the interface says **${t.expected}**:`);
      L.push('');
      for (const p of t.english) L.push(`- \`${p}\``);
      L.push('');
    }
    if (t.foreign.length) {
      L.push("Using another locale's word:");
      L.push('');
      for (const p of t.foreign) L.push(`- \`${p}\``);
      L.push('');
    }
    L.push('</details>');
    L.push('');
  }
  L.push('Counted on prose only — fenced code is skipped, because `Job` is the entity name in');
  L.push('API payloads and must stay English there.');
  L.push('');
  L.push('---');
  L.push('');

  L.push('## Interface strings');
  L.push('');
  if (!baseline) {
    L.push('Not measured — the English extraction failed. See the console output above.');
    L.push('');
  } else {
    L.push('`absent` means the key is missing from the locale file. `same as English` means the');
    L.push('key is there but carries the English text. Strings that are correctly identical in');
    L.push('every language (API, SDK, Gantt, brand and social names) are not counted.');
    L.push('');
    for (const locale of LOCALES) {
      L.push(`### \`${locale}\``);
      L.push('');
      L.push('| File | What it covers | Translated | Gaps |');
      L.push('| --- | --- | --- | --- |');
      for (const f of ui[locale]) {
        const done = f.total - f.untranslated.length;
        L.push(
          `| \`${f.file}\` | ${f.label} | ${done} / ${f.total} (${pct(done, f.total)}) | ${f.untranslated.length} |`
        );
      }
      L.push('');
      for (const f of ui[locale]) {
        if (!f.untranslated.length) continue;
        L.push(`<details><summary><code>${f.file}</code> — ${f.untranslated.length} to translate</summary>`);
        L.push('');
        L.push('| Key | English | Why |');
        L.push('| --- | --- | --- |');
        for (const u of f.untranslated) {
          const en = String(u.en ?? '').replace(/\|/g, '\\|').slice(0, 90);
          L.push(`| \`${u.key}\` | ${en} | ${u.reason} |`);
        }
        L.push('');
        L.push('</details>');
        L.push('');
      }
      const orphans = ui[locale].flatMap((f) => f.orphans.map((k) => `${f.file}: ${k}`));
      if (orphans.length) {
        L.push(`<details><summary>Orphan keys — ${orphans.length}, no longer in the source</summary>`);
        L.push('');
        for (const o of orphans) L.push(`- \`${o}\``);
        L.push('');
        L.push('</details>');
        L.push('');
      }
    }
  }
  L.push('---');
  L.push('');
  L.push('## Known limits of this report');
  L.push('');
  L.push('- **A translated page is not checked for completeness.** A page that exists in a locale');
  L.push('  counts as translated even if half its body is still English.');
  L.push('- **Staleness is measured by commit date**, so a formatting-only commit on the English');
  L.push('  page marks the translation stale. Read it as "worth a look", not "definitely wrong".');
  L.push('- **The `pt` locale inherits Docusaurus\'s Brazilian theme strings.** Docusaurus has no');
  L.push('  bundle for a bare `pt`, and its `pt-PT` bundle is largely still English, so the pt-BR');
  L.push('  one is used. The chrome on the European Portuguese site therefore reads Brazilian in');
  L.push('  places. Overriding a string in `i18n/pt/code.json` wins over the bundle.');

  writeFileSync(OUT, L.join('\n') + '\n');

  console.log(`[i18n-inventory] wrote ${relative(ROOT, OUT)}`);
  for (const locale of LOCALES) {
    const d = docs[locale];
    const done = englishStems.size - d.missing.length;
    const uiGaps = ui[locale] ? ui[locale].reduce((a, f) => a + f.untranslated.length, 0) : '?';
    console.log(
      `  ${locale.padEnd(6)} pages ${String(done).padStart(3)}/${englishStems.size}` +
        `  stale ${String(d.stale.length).padStart(3)}` +
        `  interface gaps ${uiGaps}`
    );
  }
}

main();
