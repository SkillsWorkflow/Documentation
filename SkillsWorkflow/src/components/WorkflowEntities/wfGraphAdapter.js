import Dagre from '@dagrejs/dagre';
import { HIERARCHY, ALL_ENTITY_NAMES } from './wfGraphConfig';

const NODE_WIDTH = 160;
const NODE_HEIGHT = 40;

// ── Styles ──────────────────────────────────────────────

const DEFAULT_NODE_STYLE = {
    background: '#0072c6',
    color: '#fff',
    border: '2px solid #00508b',
    borderRadius: 8,
    fontWeight: 700,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
    width: NODE_WIDTH,
};

const ROOT_NODE_STYLE = {
    ...DEFAULT_NODE_STYLE,
    background: '#00223b',
    border: '2px solid #003963',
};

const EDGE_STYLE = {
    stroke: '#64748b',
    strokeWidth: 1.5,
};

const EDGE_LABEL_STYLE = { fontSize: 10, fill: '#475569', fontWeight: 600 };
const EDGE_LABEL_BG = { fill: '#f1f5f9', fillOpacity: 0.9 };

// ── Precomputed lookups ─────────────────────────────────

const childrenOf = new Map();
const parentsOf = new Map();

for (const { parent, child } of HIERARCHY) {
    if (!childrenOf.has(parent)) childrenOf.set(parent, []);
    childrenOf.get(parent).push(child);
    if (!parentsOf.has(child)) parentsOf.set(child, []);
    if (!parentsOf.get(child).includes(parent)) parentsOf.get(child).push(parent);
}

const rootSet = new Set(ALL_ENTITY_NAMES.filter((n) => !parentsOf.has(n)));

// ── Layout with dagre ───────────────────────────────────

function applyDagreLayout(nodes, edges) {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    g.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 90 });

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

function makeEdge({ parent, child, via }, idx) {
    return {
        id: `${parent}->${child}:${idx}`,
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
 * Build the full graph with all workflow entities.
 */
export function buildFullGraph() {
    const nodes = ALL_ENTITY_NAMES.map(makeNode);
    const edges = HIERARCHY.map(makeEdge);
    const laid = applyDagreLayout(nodes, edges);
    return { nodes: laid, edges };
}

/**
 * Build a focused subgraph: the selected entity + its parent + its children.
 */
export function buildFocusGraph(entityName) {
    const related = new Set([entityName]);

    for (const p of parentsOf.get(entityName) ?? []) {
        related.add(p);
    }

    for (const c of childrenOf.get(entityName) ?? []) {
        related.add(c);
    }

    const nodes = [...related].map(makeNode);
    const edges = HIERARCHY.filter(
        (h) => related.has(h.parent) && related.has(h.child),
    ).map(makeEdge);

    const laid = applyDagreLayout(nodes, edges);
    return { nodes: laid, edges };
}
