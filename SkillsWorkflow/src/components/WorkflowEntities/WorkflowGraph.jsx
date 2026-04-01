import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from '@docusaurus/Link';

import { ALL_ENTITY_NAMES } from './wfGraphConfig';
import { buildFullGraph, buildFocusGraph } from './wfGraphAdapter';

const SELECTED_BORDER = '3px solid #fbbf24';
const SELECTED_SHADOW = '0 0 0 3px rgba(251,191,36,0.4)';

/**
 * Short, user-friendly descriptions shown when a node is clicked.
 * Entities with a dedicated doc page include a `docPath` for navigation.
 */
const ENTITY_INFO = {
  Workflow: {
    description: 'The top-level configuration that defines how a document type moves through its lifecycle.',
    examples: 'One workflow per document type (e.g. Deliverable, Project, Estimate).',
  },
  Stage: {
    description: 'A step in the workflow that a document passes through (e.g. Draft, In Review, Approved).',
    examples: 'Each stage has a name, a color, and a stage type.',
    docPath: './stages',
  },
  Transition: {
    description: 'A rule that allows a document to move from one stage to another.',
    examples: '"Submit for Review" moves a document from Draft → In Review.',
    docPath: './transitions',
  },
  'Stage Mapping': {
    description: 'Links stages across different workflows so documents can reference each other\'s stage.',
    examples: 'When a Project reaches "Approved", its child Deliverables can advance too.',
    docPath: './stage-mappings',
  },
  'Stage Type': {
    description: 'A classification linked to a stage through WorkflowStateType.',
    examples: 'Use DE-Stages to see the real stage type values configured in an environment.',
    docPath: './stage-types',
  },
  'Stage Team': {
    description: 'Defines which team role (Requester, Executor, etc.) is assigned at a particular stage.',
    examples: 'The "In Review" stage may assign the Reviewer team.',
    docPath: './stages#stage-teams',
  },
  Translations: {
    description: 'Localized names for stages and transitions so the UI adapts to each user\'s language.',
    examples: '"Aprovado" (PT), "Approved" (EN), "Aprobado" (ES).',
    docPath: './stages#translations',
  },
  Action: {
    description: 'An automated operation attached to a transition. Each action has a type (e.g. SendEmail, Block, AssignTeam) selected from over 100 built-in action types.',
    examples: 'Send an email notification, update a field, create a child document.',
    docPath: './transitions#transition-actions',
  },
  Role: {
    description: 'A security role that is allowed (or required) to execute a transition.',
    examples: 'Only users with the "Manager" role can approve.',
    docPath: './transitions#transition-roles',
  },
  Motive: {
    description: 'A reason the user must select when executing a transition.',
    examples: '"Budget exceeded", "Client requested change".',
    docPath: './transitions#transition-motives',
  },
  'Custom Action': {
    description: 'A custom script or plugin that runs when a transition is executed.',
    examples: 'Call an external API, generate a PDF, sync with an ERP system.',
    docPath: './transitions#transition-custom-actions',
  },
};

function WorkflowGraphInner() {
  const { fitView } = useReactFlow();
  const [focusEntity, setFocusEntity] = useState('');
  const [selectedEntity, setSelectedEntity] = useState(null);
  const focusVersion = useRef(0);

  const { nodes: graphNodes, edges: graphEdges } = useMemo(
    () => (focusEntity ? buildFocusGraph(focusEntity) : buildFullGraph()),
    [focusEntity],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(graphNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphEdges);

  useEffect(() => {
    setNodes(graphNodes);
    setEdges(graphEdges);
    setSelectedEntity(focusEntity || null);
    focusVersion.current += 1;
    const v = focusVersion.current;
    requestAnimationFrame(() => {
      if (v === focusVersion.current) {
        fitView({ padding: 0.3, duration: 200 });
      }
    });
  }, [graphNodes, graphEdges, setNodes, setEdges, focusEntity, fitView]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          border: n.id === selectedEntity ? SELECTED_BORDER : n.style.border,
          boxShadow: n.id === selectedEntity ? SELECTED_SHADOW : undefined,
        },
      })),
    );
  }, [selectedEntity, setNodes]);

  const info = useMemo(
    () => (selectedEntity ? ENTITY_INFO[selectedEntity] : null),
    [selectedEntity],
  );

  const onDropdownChange = useCallback((e) => {
    setFocusEntity(e.target.value);
  }, []);

  const onNodeClick = useCallback((_event, node) => {
    setSelectedEntity((prev) => (prev === node.id ? null : node.id));
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor="wf-focus" style={{ fontWeight: 600 }}>
          Focus on:
        </label>
        <select
          id="wf-focus"
          value={focusEntity}
          onChange={onDropdownChange}
          style={{
            padding: '6px 12px',
            borderRadius: 4,
            border: '1px solid #cbd5e1',
            fontSize: 14,
          }}
        >
          <option value="">All (full hierarchy)</option>
          {ALL_ENTITY_NAMES.map((name) => (
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

      {selectedEntity && info && (
        <div
          style={{
            marginTop: 16,
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h4 style={{ margin: '0 0 8px 0' }}>{selectedEntity}</h4>
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

      {selectedEntity && !info && (
        <p style={{ marginTop: 12, color: '#94a3b8', fontSize: 13 }}>
          No details available for {selectedEntity}.
        </p>
      )}

      {!selectedEntity && (
        <p style={{ marginTop: 12, color: '#64748b', fontSize: 13 }}>
          Click a node to see what it does.
        </p>
      )}
    </div>
  );
}

export default function WorkflowGraph() {
  return (
    <ReactFlowProvider>
      <WorkflowGraphInner />
    </ReactFlowProvider>
  );
}
