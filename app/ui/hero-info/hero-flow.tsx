'use client'
import 'reactflow/dist/style.css';
import React from "react";
import ReactFlow, {
    Background,
    Controls,
} from "react-flow-renderer";
import BackButton from '../back-button';
import { nodeTypes } from '@/app/lib/customNodeTypes';
import { FlowNodes, FlowEdges } from '@/app/definitions';

interface FlowProps {
    nodes: FlowNodes[];
    edges: FlowEdges[];
}

const Flow: React.FC<FlowProps> = ({ nodes, edges }) => {
    return (
        <div className='h-[100vh] w-[100vw]'>
            <BackButton/>
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} defaultZoom={0}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
      );
}

export default Flow;