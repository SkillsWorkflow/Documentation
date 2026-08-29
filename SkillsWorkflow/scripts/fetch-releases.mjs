#!/usr/bin/env node
/**
 * Pulls the release list from the integration workflow and writes the subset that
 * is safe to publish to src/data/releases.json.
 *
 * The fetch happens at BUILD time, not in the browser, for one reason that
 * matters more than speed: the endpoint returns internal fields alongside the
 * public ones. `Job` carries client codes and client names
 * ("ARTPLANBR0003CS008 - Dreamers - ..."), `Number` carries the ticket code and
 * `Effort` the internal estimate. A client-side fetch would ship all 579 KB of
 * that to every visitor. Projecting here means those fields never leave the
 * build machine.
 *
 * Published per entry: version, title, description, and a category derived from
 * JobType. Nothing else.
 *
 * Failure is soft. If the endpoint is unreachable the previous releases.json is
 * kept and the build carries on, so an API outage cannot break the docs site.
 *
 * Override the source with RELEASES_ENDPOINT.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'src', 'data', 'releases.json');

const ENDPOINT =
  process.env.RELEASES_ENDPOINT ||
  'https://apiv2-support-test-we.skillsworkflow.com/api/integration-workflows/b98510a6-ff19-4482-9213-f84b1a71e183/execute';

/* JobType is an internal, bilingual label. Only two things need to reach a
   reader: whether an entry fixes something that was broken, or changes what the
   product does. IsFeature is 0 for exactly the 127 "Error / Erro" entries and 1
   for everything else, including Doubt and Sub-Task, so it is not a reliable
   "this is a feature" flag on its own — JobType decides. */
function categoryOf(entry) {
  const type = String(entry.JobType || '').toLowerCase();
  if (type.startsWith('error') || type === 'bug') return 'fix';
  if (type.startsWith('change request')) return 'change';
  return 'improvement';
}

/* Roughly 3% of rows carry a version with a leading dot (".23.6"). They are
   kept, with the dot trimmed, rather than dropped: the entry is real even when
   the version string was typed wrong. Anything still unparseable is grouped
   under an explicit "Unversioned" bucket instead of being silently discarded. */
function normalizeVersion(raw) {
  const v = String(raw || '').trim().replace(/^\.+/, '');
  return /^\d+(\.\d+)*$/.test(v) ? v : null;
}

function versionSortKey(v) {
  return v.split('.').map((n) => Number(n) || 0);
}

function compareVersionsDesc(a, b) {
  const x = versionSortKey(a);
  const y = versionSortKey(b);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const diff = (y[i] || 0) - (x[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

async function main() {
  let raw;
  try {
    const res = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    /* The workflow answers with the payload double-encoded: a JSON string whose
       contents are the JSON array. Unwrap once more when that is what arrives,
       so the script works either way. */
    raw = await res.json();
    if (typeof raw === 'string') raw = JSON.parse(raw);
    if (!Array.isArray(raw)) throw new Error(`expected an array, got ${typeof raw}`);
  } catch (error) {
    const existing = await fs
      .readFile(OUT, 'utf8')
      .then((s) => JSON.parse(s))
      .catch(() => null);
    if (existing) {
      console.warn(`[releases] fetch failed (${error.message}) — keeping the existing file`);
      return;
    }
    console.warn(`[releases] fetch failed (${error.message}) — writing an empty file`);
    await fs.mkdir(path.dirname(OUT), { recursive: true });
    await fs.writeFile(OUT, JSON.stringify({ generatedAt: null, versions: [] }, null, 2));
    return;
  }

  const byVersion = new Map();
  let unversioned = 0;

  for (const entry of raw) {
    const title = String(entry.ReleaseTitle || '').trim();
    if (!title) continue;

    const version = normalizeVersion(entry.FormattedVersion);
    if (!version) unversioned++;
    const key = version || 'unversioned';

    if (!byVersion.has(key)) byVersion.set(key, []);
    byVersion.get(key).push({
      title,
      // HTML, but only ever p / ul / li / strong / br / span / em / code / a.
      description: String(entry.ReleaseDescription || '').trim(),
      category: categoryOf(entry),
    });
  }

  const versions = [...byVersion.entries()]
    .filter(([v]) => v !== 'unversioned')
    .sort((a, b) => compareVersionsDesc(a[0], b[0]))
    .map(([version, entries]) => ({ version, entries }));

  if (byVersion.has('unversioned')) {
    versions.push({ version: null, entries: byVersion.get('unversioned') });
  }

  const total = versions.reduce((n, v) => n + v.entries.length, 0);
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), versions }, null, 2)
  );

  console.log(
    `[releases] ${total} entries across ${versions.length} versions` +
      (unversioned ? ` (${unversioned} without a usable version)` : '')
  );
}

main();
