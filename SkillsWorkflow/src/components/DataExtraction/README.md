# Data Extraction Lineage Graph

Interactive diagram showing the hierarchy between Data Extractions (DEs).

## Architecture

```
deGraphConfig.js   ← single source of truth for DE hierarchy (manual)
lineageAdapter.js  ← builds React Flow nodes/edges + dagre layout
LineageGraph.jsx   ← React component (dropdown, graph, columns panel)
lineage.json       ← only used for DE output columns (generated)
```

## Key rules

- **Hierarchy is manual.** All parent→child relationships are defined in `deGraphConfig.js`, not inferred from data.
- **One parent per DE.** Each child has exactly one primary parent.
- **lineage.json is for fields only.** It provides the column list shown when a node is clicked. It does NOT drive the graph structure.

## How to add a new DE

1. Add a new JSON source file under `data/de-sources/` (if applicable).
2. Run `npm run generate:de` to regenerate `data/generated/lineage.json`.
3. Open `src/components/DataExtraction/deGraphConfig.js`.
4. Add a `{ parent, child, via }` entry to `HIERARCHY`.
5. If the DE has no parent, add it to `ROOTS`.
6. Build to verify: `npm run build`.

## When to run `generate:de`

Run it whenever:
- A new DE SQL source is added to `data/de-sources/`
- An existing DE's SQL is modified
- You need updated column metadata

It regenerates `data/generated/lineage.json`, `columns.json`, and `de-index.json`.

## Focus mode

The dropdown in the component allows focusing on a single DE. This shows:
- The selected DE
- Its direct parent (if any)
- Its direct children (if any)
- Only the edges between them

Select "All (full hierarchy)" to see the complete tree.
