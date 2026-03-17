import Dagre from '@dagrejs/dagre';
import { HIERARCHY, ALL_DE_NAMES } from './deGraphConfig';

const NODE_WIDTH = 180;
const NODE_HEIGHT = 40;

// ── Styles ──────────────────────────────────────────────

const DEFAULT_NODE_STYLE = {
    background: '#4f46e5',
    color: '#fff',
    border: '2px solid #3730a3',
    borderRadius: 8,
    fontWeight: 700,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
    width: NODE_WIDTH,
};

const ROOT_NODE_STYLE = {
    ...DEFAULT_NODE_STYLE,
    background: '#0f172a',
    border: '2px solid #334155',
};

const EDGE_STYLE = {
    stroke: '#64748b',
    strokeWidth: 1.5,
};

const EDGE_LABEL_STYLE = { fontSize: 10, fill: '#475569', fontWeight: 600 };
const EDGE_LABEL_BG = { fill: '#f1f5f9', fillOpacity: 0.9 };

// ── Precomputed lookups ─────────────────────────────────

const childrenOf = new Map();
const parentOf = new Map();

for (const { parent, child } of HIERARCHY) {
    if (!childrenOf.has(parent)) childrenOf.set(parent, []);
    childrenOf.get(parent).push(child);
    parentOf.set(child, parent);
}

const rootSet = new Set(ALL_DE_NAMES.filter((n) => !parentOf.has(n)));

// ── Layout with dagre ───────────────────────────────────

function applyDagreLayout(nodes, edges) {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    g.setGraph({ rankdir: 'TB', nodesep: 40, ranksep: 80 });

    for (const node of nodes) {
        g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
    }
    for (const edge of edges) {
        g.setEdge(edge.source, edge.target);
    }

    Dagre.layout(g);

    return nodes.map((node) => {
        const pos = g.node(node.id);
        return {
            ...node,
            position: {
                x: pos.x - NODE_WIDTH / 2,
                y: pos.y - NODE_HEIGHT / 2,
            },
        };
    });
}

// ── Build helpers ───────────────────────────────────────

function makeNode(id) {
    return {
        id,
        type: 'default',
        data: { label: id },
        position: { x: 0, y: 0 },
        style: rootSet.has(id) ? ROOT_NODE_STYLE : DEFAULT_NODE_STYLE,
    };
}

function makeEdge({ parent, child, via }) {
    return {
        id: `${parent}->${child}`,
        source: parent,
        target: child,
        label: via ?? '',
        type: 'default',
        style: EDGE_STYLE,
        labelStyle: EDGE_LABEL_STYLE,
        labelBgStyle: EDGE_LABEL_BG,
        labelBgPadding: [5, 3],
        markerEnd: { type: 'arrowclosed', color: '#64748b' },
    };
}

// ── Public API ──────────────────────────────────────────

/**
 * Build the full graph with all DEs.
 */
export function buildFullGraph() {
    const nodes = ALL_DE_NAMES.map(makeNode);
    const edges = HIERARCHY.map(makeEdge);
    const laid = applyDagreLayout(nodes, edges);
    return { nodes: laid, edges };
}

/**
 * Build a focused subgraph: the selected DE + its parent + its children,
 * with the connecting edges only.
 */
export function buildFocusGraph(deName) {
    const related = new Set([deName]);

    const p = parentOf.get(deName);
    if (p) related.add(p);

    for (const c of childrenOf.get(deName) ?? []) {
        related.add(c);
    }

    const nodes = [...related].map(makeNode);
    const edges = HIERARCHY.filter(
        (h) => related.has(h.parent) && related.has(h.child),
    ).map(makeEdge);

    const laid = applyDagreLayout(nodes, edges);
    return { nodes: laid, edges };
}

/**
 * Get the list of output columns for a given DE.
 */
export function getColumnsForDE(lineageData, deName) {
    return (lineageData[deName]?.columns ?? []).map((c) => ({
        alias: c.alias,
        sourceTable: c.sourceTable,
        sourceColumn: c.sourceColumn,
    }));
}
