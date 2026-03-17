import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import lineageData from '@site/data/generated/lineage.json';
import { ALL_DE_NAMES } from './deGraphConfig';
import { buildFullGraph, buildFocusGraph, getColumnsForDE } from './lineageAdapter';

const SELECTED_BORDER = '3px solid #fbbf24';
const SELECTED_SHADOW = '0 0 0 3px rgba(251,191,36,0.4)';

export default function LineageGraph() {
  const [focusDE, setFocusDE] = useState('');
  const [selectedDE, setSelectedDE] = useState(null);

  const { nodes: graphNodes, edges: graphEdges } = useMemo(
    () => (focusDE ? buildFocusGraph(focusDE) : buildFullGraph()),
    [focusDE],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(graphNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphEdges);

  // Sync nodes/edges when focus changes
  useEffect(() => {
    setNodes(graphNodes);
    setEdges(graphEdges);
    setSelectedDE(focusDE || null);
  }, [graphNodes, graphEdges, setNodes, setEdges, focusDE]);

  // Highlight selected node
  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          border: n.id === selectedDE ? SELECTED_BORDER : n.style.border,
          boxShadow: n.id === selectedDE ? SELECTED_SHADOW : undefined,
        },
      })),
    );
  }, [selectedDE, setNodes]);

  const columns = useMemo(
    () => (selectedDE ? getColumnsForDE(lineageData, selectedDE) : []),
    [selectedDE],
  );

  const onDropdownChange = useCallback((e) => {
    setFocusDE(e.target.value);
  }, []);

  const onNodeClick = useCallback((_event, node) => {
    setSelectedDE((prev) => (prev === node.id ? null : node.id));
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor="de-focus" style={{ fontWeight: 600 }}>
          Focus on DE:
        </label>
        <select
          id="de-focus"
          value={focusDE}
          onChange={onDropdownChange}
          style={{
            padding: '6px 12px',
            borderRadius: 4,
            border: '1px solid #cbd5e1',
            fontSize: 14,
          }}
        >
          <option value="">All (full hierarchy)</option>
          {ALL_DE_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ width: '100%', height: 500, border: '1px solid #e2e8f0', borderRadius: 8 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#94a3b8" gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>

      {selectedDE && columns.length > 0 && (
        <div
          style={{
            marginTop: 16,
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            padding: 16,
            maxHeight: 300,
            overflowY: 'auto',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>
            {selectedDE} — {columns.length} columns
          </h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                <th style={{ padding: '6px 8px' }}>Column</th>
                <th style={{ padding: '6px 8px' }}>Source Table</th>
                <th style={{ padding: '6px 8px' }}>Source Column</th>
              </tr>
            </thead>
            <tbody>
              {columns.map((col, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #f1f5f9',
                    background: i % 2 === 0 ? '#fafafa' : '#fff',
                  }}
                >
                  <td style={{ padding: '4px 8px', fontWeight: 500 }}>{col.alias}</td>
                  <td style={{ padding: '4px 8px', color: '#64748b' }}>{col.sourceTable ?? '—'}</td>
                  <td style={{ padding: '4px 8px', color: '#64748b' }}>{col.sourceColumn ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedDE && columns.length === 0 && (
        <p style={{ marginTop: 12, color: '#94a3b8', fontSize: 13 }}>
          No column data available for {selectedDE}.
        </p>
      )}

      {!selectedDE && (
        <p style={{ marginTop: 12, color: '#64748b', fontSize: 13 }}>
          Click a node to inspect its output columns.
        </p>
      )}
    </div>
  );
}
