import Dagre from '@dagrejs/dagre';

const NODE_WIDTH = 150;
const NODE_HEIGHT = 44;

// ── Styles by role ──────────────────────────────────────

const BASE_NODE_STYLE = {
    color: '#fff',
    borderRadius: 8,
    fontWeight: 700,
    padding: '10px 14px',
    fontSize: 13,
    cursor: 'pointer',
    width: NODE_WIDTH,
    textAlign: 'center',
};

const ROLE_STYLE = {
    // The system event that starts everything.
    event: { ...BASE_NODE_STYLE, background: '#00223b', border: '2px solid #003963' },
    // Optional gate — dashed to signal it can be skipped.
    optional: { ...BASE_NODE_STYLE, background: '#5b6b7b', border: '2px dashed #94a3b8' },
    // Mandatory Start / Result anchors.
    anchor: { ...BASE_NODE_STYLE, background: '#0a5a97', border: '2px solid #063f6b' },
    // The chained actions that do the work.
    work: { ...BASE_NODE_STYLE, background: '#0072c6', border: '2px solid #00508b' },
};

const EDGE_STYLE = {
    stroke: '#64748b',
    strokeWidth: 1.5,
};

const EDGE_LABEL_STYLE = { fontSize: 10, fill: '#475569', fontWeight: 600 };
const EDGE_LABEL_BG = { fill: '#f1f5f9', fillOpacity: 0.9 };

// ── Layout with dagre (left → right, like a pipeline) ────

function applyDagreLayout(nodes, edges) {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    g.setGraph({ rankdir: 'LR', nodesep: 40, ranksep: 80 });

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
            position: { x: pos.x - NODE_WIDTH / 2, y: pos.y - NODE_HEIGHT / 2 },
        };
    });
}

// ── Build helpers ───────────────────────────────────────

function makeNode({ id, role }) {
    return {
        id,
        type: 'default',
        data: { label: id },
        position: { x: 0, y: 0 },
        style: ROLE_STYLE[role] ?? ROLE_STYLE.work,
    };
}

function makeEdge({ from, to, label }, idx) {
    return {
        id: `${from}->${to}:${idx}`,
        source: from,
        target: to,
        label: label ?? '',
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
 * Build an automation flow diagram from a preset's nodes + flow.
 */
export function buildFlowGraph(nodes, flow) {
    const rfNodes = nodes.map(makeNode);
    const rfEdges = flow.map(makeEdge);
    const laid = applyDagreLayout(rfNodes, rfEdges);
    return { nodes: laid, edges: rfEdges };
}
