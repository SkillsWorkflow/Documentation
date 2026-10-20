/**
 * MD Generator Module — Renders per-DE Markdown pages and updates the
 * landing page summary table.
 */

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { parseSql } from './sql-parser.mjs';

const MARKER_START = '<!-- DE-TABLE-START -->';
const MARKER_END = '<!-- DE-TABLE-END -->';

/**
 * Generate all per-DE Markdown pages and the _category_.json file.
 *
 * @param {Array}  deList     Enriched DE objects from de-loader.
 * @param {string} outputDir  Absolute path to docs/build-and-extend/api/data-extraction/
 * @returns {Promise<Array>} Array of { name, slug, parsed } for each DE.
 */
export async function generateDePages(deList, outputDir) {
    await mkdir(outputDir, { recursive: true });

    // Write _category_.json
    await writeFile(
        join(outputDir, '_category_.json'),
        JSON.stringify(
            {
                label: 'Data Extraction API',
                position: 1,
                collapsible: true,
                collapsed: true,
                link: { type: 'doc', id: 'build-and-extend/api/data-extraction/index' },
            },
            null,
            2,
        ) + '\n',
    );

    const summaryRows = [];

    for (const de of deList) {
        const parsed = parseSql(de.Statement);
        const slug = de.Name.toLowerCase();
        const fileSlug = slug; // e.g. "de-clients"
        const override = de._override || {};

        const sidebarLabel = override.displayName || de.Name.replace(/^DE-/, '');
        const description = override.descriptionOverride || de.Description || '';
        const sidebarPosition = de.Number != null ? de.Number : undefined;

        const lines = [];

        // --- Frontmatter ---
        lines.push('---');
        lines.push(`id: ${fileSlug}`);
        lines.push(`title: ${de.Name}`);
        lines.push(`sidebar_label: ${sidebarLabel}`);
        if (sidebarPosition != null) {
            lines.push(`sidebar_position: ${sidebarPosition}`);
        }
        lines.push('---');
        lines.push('');

        // --- Description ---
        if (description) {
            lines.push(description);
            lines.push('');
        }

        // --- Endpoint ---
        lines.push('## Endpoint');
        lines.push('');
        lines.push('```');
        lines.push(`POST /api/v3/analytics/named-query/${de.Name}/dynamic-execute`);
        lines.push('```');
        lines.push('');

        // --- Parameters ---
        lines.push('## Parameters');
        lines.push('');
        const sqlParams = extractSqlParameters(de.Statement);
        const paramKeys = [...new Set([...Object.keys(de.Parameters || {}), ...sqlParams.keys()])];
        if (paramKeys.length > 0) {
            // The API binds only what the body sends: a missing parameter fails with "Must declare the scalar variable".
            lines.push('Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.');
            lines.push('');
            lines.push('| Parameter | Used in |');
            lines.push('|-----------|---------|');
            for (const key of paramKeys) {
                const usage = sqlParams.get(key);
                lines.push(`| ${key} | ${usage ? '`' + usage.replace(/\|/g, '\\|') + '`' : '—'} |`);
            }
        } else {
            lines.push('This query has no parameters.');
        }
        lines.push('');

        // --- Output Columns ---
        lines.push('## Output Columns');
        lines.push('');
        if (parsed.parseError) {
            lines.push(':::caution');
            lines.push('Column metadata could not be extracted — the SQL statement could not be parsed automatically.');
            lines.push(':::');
        } else if (parsed.columns.length > 0) {
            const hasDescriptions = override.columnDescriptions && Object.keys(override.columnDescriptions).length > 0;
            if (hasDescriptions) {
                lines.push('| Column | Source Table | Source Column | Description |');
                lines.push('|--------|-------------|---------------|-------------|');
            } else {
                lines.push('| Column | Source Table | Source Column |');
                lines.push('|--------|-------------|---------------|');
            }
            for (const col of parsed.columns) {
                const alias = col.alias || col.sourceColumn || '';
                const tbl = col.sourceTable || '—';
                const src = (typeof col.sourceColumn === 'string' && !col.sourceColumn.includes('[object Object]'))
                    ? col.sourceColumn
                    : '(expression)';
                if (hasDescriptions) {
                    const desc = override.columnDescriptions?.[alias] || '';
                    lines.push(`| ${alias} | ${tbl} | ${src} | ${desc} |`);
                } else {
                    lines.push(`| ${alias} | ${tbl} | ${src} |`);
                }
            }
        } else {
            lines.push('No columns detected.');
        }
        lines.push('');

        // --- Source Tables ---
        lines.push('## Source Tables');
        lines.push('');
        if (parsed.tables.length > 0) {
            lines.push('| Table | Alias | Join |');
            lines.push('|-------|-------|------|');
            for (const tbl of parsed.tables) {
                lines.push(`| ${tbl.name} | ${tbl.alias || '—'} | ${formatJoinType(tbl.joinType)} |`);
            }
        } else {
            lines.push('No table metadata detected.');
        }
        lines.push('');

        // --- Custom Fields ---
        if (parsed.customFieldsDirectives.length > 0) {
            lines.push('## Custom Fields');
            lines.push('');
            for (const directive of parsed.customFieldsDirectives) {
                lines.push(`- Module: \`${directive}\``);
            }
            lines.push('');
        }

        // --- Roles / Access ---
        if (de.Roles && de.Roles.length > 0) {
            lines.push('## Access');
            lines.push('');
            lines.push('| Role | Administrative |');
            lines.push('|------|---------------|');
            for (const role of de.Roles) {
                lines.push(`| ${role.RoleName || role.Name} | ${role.IsAdministrative ? 'Yes' : 'No'} |`);
            }
            lines.push('');
        }

        // --- Override notes ---
        if (override.notes) {
            lines.push(':::note');
            lines.push(override.notes);
            lines.push(':::');
            lines.push('');
        }

        // --- Metadata footer ---
        const metaParts = [];
        if (de.Version != null) metaParts.push(`Version: ${de.Version}`);
        if (de.Category) metaParts.push(`Category: ${de.Category}`);
        metaParts.push(`System: ${de.IsSystem ? 'Yes' : 'No'}`);
        lines.push(`*${metaParts.join(' · ')}*`);
        lines.push('');

        // Write file
        await writeFile(join(outputDir, `${fileSlug}.md`), lines.join('\n'));

        summaryRows.push({ name: de.Name, slug: fileSlug, paramKeys, description, parsed });
    }

    return summaryRows;
}

/**
 * Update the landing page by replacing content between DE-TABLE markers.
 *
 * @param {string} landingPagePath  Absolute path to data-extraction/index.md
 * @param {Array}  summaryRows      Output from generateDePages.
 */
export async function updateLandingPage(landingPagePath, summaryRows) {
    const content = await readFile(landingPagePath, 'utf-8');

    const startIdx = content.indexOf(MARKER_START);
    const endIdx = content.indexOf(MARKER_END);

    if (startIdx === -1 || endIdx === -1) {
        console.warn('⚠  Landing page markers not found — skipping summary table update.');
        return;
    }

    const lines = [];
    lines.push('');
    lines.push('| NamedQuery | Description | Parameters | Columns | Details |');
    lines.push('|-----------|-------------|---------|---------|---------|');

    for (const row of summaryRows) {
        const filters = row.paramKeys.length > 0 ? row.paramKeys.join(', ') : '—';
        const colCount = row.parsed.columns.length;
        const desc = row.description ? truncate(row.description.replace(/\s+/g, ' ').trim(), 60) : '—';
        lines.push(`| ${row.name} | ${desc} | ${filters} | ${colCount} | [View](./${row.slug}.md) |`);
    }

    lines.push('');

    const newContent =
        content.substring(0, startIdx + MARKER_START.length) +
        '\n' +
        lines.join('\n') +
        content.substring(endIdx);

    await writeFile(landingPagePath, newContent);
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatJoinType(jt) {
    if (!jt || jt === 'FROM') return 'FROM';
    return String(jt).toUpperCase().replace(/\s+/g, ' ');
}

// @CurrentUserId is filled in by the API from the calling user, so callers never send it.
const SERVER_PARAMETERS = new Set(['currentuserid']);

function extractSqlParameters(statement) {
    const sql = statement.replace(/--[^\n]*/g, '');
    const declared = new Set([...sql.matchAll(/declare\s+@(\w+)/gi)].map((m) => m[1].toLowerCase()));
    const params = new Map();
    for (const line of sql.split('\n')) {
        for (const m of line.matchAll(/(?<!@)@(\w+)/g)) {
            const key = m[1].toLowerCase();
            if (declared.has(key) || SERVER_PARAMETERS.has(key) || [...params.keys()].some((k) => k.toLowerCase() === key)) continue;
            params.set(m[1], line.trim().replace(/\s+/g, ' '));
        }
    }
    return params;
}

function truncate(str, max) {
    if (str.length <= max) return str;
    return str.substring(0, max - 1) + '…';
}
