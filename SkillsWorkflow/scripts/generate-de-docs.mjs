#!/usr/bin/env node

/**
 * Data Extraction Documentation Generator
 *
 * Reads DE JSON source files from data/de-sources/, parses their T-SQL
 * statements, and generates:
 *   - Per-DE Markdown pages in docs/api/data-extraction/
 *   - Updated summary table in the landing page
 *   - Machine-readable JSON artifacts in data/generated/
 *
 * Usage:
 *   node scripts/generate-de-docs.mjs
 *
 * Or via npm:
 *   npm run generate:de
 */

import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDeSources } from './lib/de-loader.mjs';
import { generateDePages, updateLandingPage } from './lib/md-generator.mjs';
import { emitArtifacts } from './lib/artifact-emitter.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Paths
const SOURCES_DIR = resolve(ROOT, 'data/de-sources');
const OVERRIDES_DIR = resolve(ROOT, 'data/de-overrides');
const GENERATED_DIR = resolve(ROOT, 'data/generated');
const OUTPUT_DIR = resolve(ROOT, 'docs/api/data-extraction');
const LANDING_PAGE = resolve(ROOT, 'docs/api/data-extraction-api.md');

async function main() {
    console.log('═══════════════════════════════════════════');
    console.log('  Data Extraction Documentation Generator');
    console.log('═══════════════════════════════════════════');
    console.log('');

    // 1. Load sources
    console.log(`📂 Loading DE sources from: ${SOURCES_DIR}`);
    const deList = await loadDeSources(SOURCES_DIR, OVERRIDES_DIR);
    console.log(`   Found ${deList.length} DE definition(s)\n`);

    // 2. Generate per-DE pages
    console.log('📝 Generating per-DE documentation pages...');
    const summaryRows = await generateDePages(deList, OUTPUT_DIR);
    console.log(`   Generated ${summaryRows.length} page(s) in docs/api/data-extraction/\n`);

    // 3. Update landing page
    console.log('📄 Updating landing page summary table...');
    await updateLandingPage(LANDING_PAGE, summaryRows);
    console.log('   Landing page updated\n');

    // 4. Emit artifacts
    console.log('📦 Emitting JSON artifacts...');
    const stats = await emitArtifacts(deList, GENERATED_DIR);
    console.log(`   de-index.json:  ${stats.indexCount} entries`);
    console.log(`   columns.json:   ${stats.columnCount} columns`);
    console.log(`   lineage.json:   ${stats.lineageCount} DEs mapped\n`);

    console.log('✅ Generation complete.');
}

main().catch((err) => {
    console.error('❌ Generation failed:', err.message);
    process.exit(1);
});
