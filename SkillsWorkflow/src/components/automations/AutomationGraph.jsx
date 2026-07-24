import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from '@docusaurus/Link';

import { PRESETS } from './automationGraphConfig';
import { buildFlowGraph } from './automationGraphAdapter';

const SELECTED_BORDER = '3px solid #fbbf24';
const SELECTED_SHADOW = '0 0 0 3px rgba(251,191,36,0.4)';

function AutomationGraphInner({ preset, height }) {
  const model = PRESETS[preset] ?? PRESETS.model;
  const [selectedNode, setSelectedNode] = useState(null);

  const { nodes: graphNodes, edges: graphEdges } = useMemo(
    () => buildFlowGraph(model.nodes, model.flow),
    [model],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(graphNodes);
  const [edges, , onEdgesChange] = useEdgesState(graphEdges);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          border: n.id === selectedNode ? SELECTED_BORDER : n.style.border,
          boxShadow: n.id === selectedNode ? SELECTED_SHADOW : undefined,
        },
      })),
    );
  }, [selectedNode, setNodes]);

  const info = useMemo(
    () => (selectedNode ? model.info[selectedNode] : null),
    [selectedNode, model],
  );

  const onNodeClick = useCallback((_event, node) => {
    setSelectedNode((prev) => (prev === node.id ? null : node.id));
  }, []);

  return (
    <div>
      <div style={{ width: '100%', height, border: '1px solid #e2e8f0', borderRadius: 8 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.25 }}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#94a3b8" gap={20} size={1} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>

      {selectedNode && info && (
        <div style={{ marginTop: 16, border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
          <h4 style={{ margin: '0 0 8px 0' }}>{selectedNode}</h4>
          <p style={{ margin: '0 0 6px 0', fontSize: 14 }}>{info.description}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>
            <strong>Example:</strong> {info.examples}
          </p>
          {info.docPath && (
            <Link
              to={info.docPath}
              style={{ display: 'inline-block', marginTop: 10, fontSize: 13, fontWeight: 600 }}
            >
              Read more →
            </Link>
          )}
        </div>
      )}

      {!selectedNode && (
        <p style={{ marginTop: 12, color: '#64748b', fontSize: 13 }}>
          Click a step to see what it does.
        </p>
      )}
    </div>
  );
}

/**
 * Interactive automation flow diagram.
 *
 * @param {string} [preset='model'] - which preset from automationGraphConfig to render.
 * @param {number} [height=360] - diagram height in px.
 */
export default function AutomationGraph({ preset = 'model', height = 360 }) {
  return (
    <ReactFlowProvider>
      <AutomationGraphInner preset={preset} height={height} />
    </ReactFlowProvider>
  );
}
