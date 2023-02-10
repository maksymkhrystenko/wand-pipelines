import ReactFlow, {
  Controls,
  Node
} from 'reactflow';
import React from 'react';
import {Layout} from 'antd';

import BlockNode from './components/block-node/block-node';
import BlockEdge from './components/block-edge/block-edge';
import useWorkingArea from './use-working-area';
import DataControls from './components/data-controls/data-controls';
import {setBlockNode} from './slices/working-area-slice';

import './working-area.scss';

const { Content } = Layout;

const nodeTypes = {
  turbo: BlockNode
};

const edgeTypes = {
  turbo: BlockEdge
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle'
};

const WorkingArea = ({showDrawer, onClose}: any) => {
  const {
    reactFlowWrapper,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setRfInstance,
    onDrop,
    onDragOver,
    onSave,
    onRestore,
    dispatch
  } = useWorkingArea({onClose});
  return <Content>
    <div className="working-area" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance as any}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        onNodeDoubleClick={(event: React.MouseEvent, node: Node) => {
          dispatch(setBlockNode(node));
          showDrawer();
        }}
        minZoom={0.5}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <DataControls onSave={onSave} onRestore={onRestore} onAdd={onRestore} />
        <Controls showInteractive={false} />
        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#ae5311" />
              <stop offset="100%" stopColor="#2a8af6" />
            </linearGradient>
            <marker
              id="edge-circle"
              viewBox="-5 -5 10 10"
              refX="0"
              refY="0"
              markerUnits="strokeWidth"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <circle stroke="#2a8af6" fill="rgb(255,255,255)"
                strokeOpacity="0.75" r="2" cx="0" cy="0" />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  </Content>;
};

export default WorkingArea;
