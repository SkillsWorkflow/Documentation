/**
 * DE Loader Module — Reads DE JSON source files and merges optional overrides.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, basename } from 'node:path';

const REQUIRED_FIELDS = ['Name', 'Statement'];

/**
 * Load all DE JSON files from the source directory and merge any overrides.
 *
 * @param {string} sourcesDir   Absolute path to data/de-sources/
 * @param {string} overridesDir Absolute path to data/de-overrides/
 * @returns {Promise<Array>} Array of enriched DE objects, sorted by Number.
 */
export async function loadDeSources(sourcesDir, overridesDir) {
    const files = (await readdir(sourcesDir)).filter((f) => f.endsWith('.json'));

    if (files.length === 0) {
        throw new Error(`No DE JSON files found in ${sourcesDir}`);
    }

    const results = [];

    for (const file of files) {
        const raw = await readFile(join(sourcesDir, file), 'utf-8');
        let de;
        try {
            de = JSON.parse(raw);
        } catch {
            console.warn(`⚠  Skipping ${file}: invalid JSON`);
            continue;
        }

        // Validate required fields
        const missing = REQUIRED_FIELDS.filter((f) => !de[f]);
        if (missing.length > 0) {
            console.warn(`⚠  Skipping ${file}: missing required fields: ${missing.join(', ')}`);
            continue;
        }

        // Attempt to load override
        const overridePath = join(overridesDir, `${de.Name}.json`);
        try {
            const overrideRaw = await readFile(overridePath, 'utf-8');
            const override = JSON.parse(overrideRaw);
            de._override = override;
            console.log(`   ✓ Override loaded for ${de.Name}`);
        } catch {
            // No override — that's fine
        }

        results.push(de);
    }

    // Sort by Number field (fallback to Name alphabetically)
    results.sort((a, b) => {
        if (a.Number != null && b.Number != null) return a.Number - b.Number;
        return (a.Name || '').localeCompare(b.Name || '');
    });

    return results;
}
