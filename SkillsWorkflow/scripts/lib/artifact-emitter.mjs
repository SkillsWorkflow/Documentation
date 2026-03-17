/**
 * Artifact Emitter Module — Generates consolidated JSON artifacts from
 * parsed DE metadata.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { parseSql } from './sql-parser.mjs';

/**
 * Emit machine-readable JSON artifacts.
 *
 * @param {Array}  deList       Enriched DE objects from de-loader.
 * @param {string} generatedDir Absolute path to data/generated/
 */
export async function emitArtifacts(deList, generatedDir) {
    await mkdir(generatedDir, { recursive: true });

    const index = [];
    const allColumns = [];
    const lineage = {};

    for (const de of deList) {
        const parsed = parseSql(de.Statement);
        const paramKeys = de.Parameters ? Object.keys(de.Parameters) : [];

        // de-index entry
        index.push({
            name: de.Name,
            description: de.Description || '',
            parameters: paramKeys,
            columnCount: parsed.columns.length,
            tableCount: parsed.tables.length,
            version: de.Version ?? null,
            category: de.Category || '',
            isSystem: de.IsSystem ?? false,
        });

        // columns entries
        for (const col of parsed.columns) {
            allColumns.push({
                deName: de.Name,
                alias: col.alias,
                sourceTable: col.sourceTable || null,
                sourceColumn: col.sourceColumn || null,
            });
        }

        // lineage entry
        lineage[de.Name] = {
            tables: parsed.tables.map((t) => ({
                name: t.name,
                alias: t.alias,
                joinType: t.joinType,
            })),
            columns: parsed.columns.map((c) => ({
                alias: c.alias,
                sourceTable: c.sourceTable,
                sourceColumn: c.sourceColumn,
            })),
            customFields: parsed.customFieldsDirectives,
        };
    }

    await Promise.all([
        writeFile(join(generatedDir, 'de-index.json'), JSON.stringify(index, null, 2) + '\n'),
        writeFile(join(generatedDir, 'columns.json'), JSON.stringify(allColumns, null, 2) + '\n'),
        writeFile(join(generatedDir, 'lineage.json'), JSON.stringify(lineage, null, 2) + '\n'),
    ]);

    return { indexCount: index.length, columnCount: allColumns.length, lineageCount: Object.keys(lineage).length };
}
