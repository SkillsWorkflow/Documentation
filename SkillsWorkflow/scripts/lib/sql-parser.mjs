/**
 * SQL Parser Module — Isolated abstraction for T-SQL parsing.
 *
 * Exports a single `parseSql(statement)` function that returns structured
 * column and table metadata. The internals use `node-sql-parser` in
 * TransactSQL mode but can be swapped for another parser (e.g. Python
 * sqlglot bridge) as long as the export signature is preserved.
 */

import NodeSqlParser from 'node-sql-parser';

const { Parser } = NodeSqlParser;
const parser = new Parser();
const CUSTOM_FIELDS_RE = /^--\s*\+CUSTOMFIELDS\(([^)]+)\)\s*$/gm;

/**
 * Parse a T-SQL SELECT statement and extract column / table metadata.
 *
 * @param {string} statement  Raw SQL from the DE JSON `Statement` field.
 * @returns {{ columns: Array, tables: Array, customFieldsDirectives: string[] }}
 */
export function parseSql(statement) {
    // 1. Extract +CUSTOMFIELDS directives
    const customFieldsDirectives = [];
    let match;
    while ((match = CUSTOM_FIELDS_RE.exec(statement)) !== null) {
        customFieldsDirectives.push(match[1].trim());
    }

    // 2. Strip all single-line SQL comments (-- ...)
    const cleaned = statement.replace(/--[^\n]*/g, '').trim();

    // 3. Parse with node-sql-parser
    let ast;
    try {
        ast = parser.astify(cleaned, { database: 'TransactSQL' });
    } catch {
        // If the parser fails, return what we can
        return { columns: [], tables: [], customFieldsDirectives, parseError: true };
    }

    // node-sql-parser may return an array; take the first statement
    const stmt = Array.isArray(ast) ? ast[0] : ast;

    // 4. Extract columns
    const columns = extractColumns(stmt);

    // 5. Extract tables
    const tables = extractTables(stmt);

    return { columns, tables, customFieldsDirectives, parseError: false };
}

/* ------------------------------------------------------------------ */
/*  Internal helpers                                                   */
/* ------------------------------------------------------------------ */

function extractColumns(stmt) {
    if (!stmt || !stmt.columns) return [];
    if (stmt.columns === '*') return [{ expression: '*', alias: '*', sourceTable: null, sourceColumn: '*' }];

    return stmt.columns.map((col) => {
        const expr = col.expr || {};
        const alias = col.as || resolveColumnName(expr);
        const sourceTable = expr.table || null;
        const sourceColumn = expr.column || expressionToString(expr);

        return { expression: expressionToString(expr), alias, sourceTable, sourceColumn };
    });
}

function extractTables(stmt) {
    if (!stmt || !stmt.from) return [];
    return flattenFrom(stmt.from);
}

function flattenFrom(fromClause, results = []) {
    if (!fromClause) return results;

    for (const item of Array.isArray(fromClause) ? fromClause : [fromClause]) {
        if (item.table) {
            results.push({
                name: item.table,
                alias: item.as || null,
                joinType: item.join || 'FROM',
            });
        }
        // Recurse into nested joins if present
        if (item.on && item.expr) {
            flattenFrom([item.expr], results);
        }
    }

    return results;
}

function resolveColumnName(expr) {
    if (expr.column) return expr.column;
    return expressionToString(expr);
}

function expressionToString(expr) {
    if (!expr) return '';
    if (typeof expr === 'string') return expr;
    if (expr.column) {
        return expr.table ? `${expr.table}.${expr.column}` : expr.column;
    }
    if (expr.type === 'function') return `${expr.name}(...)`;
    if (expr.value !== undefined) return String(expr.value);
    return '';
}
