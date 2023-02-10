import {
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  useUpdateNodeInternals
} from 'reactflow';
import {useCallback, useEffect, useRef, useState} from 'react';

import getInitialEdges from './helpers/get-initial-edges';
import getInitialNodes from './helpers/get-initial-nodes';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks';
import {
  selectBlockNode,
  selectIsSetToWorkingArea,
  setBlockNode,
  setIsSetToWorkingArea
} from './slices/working-area-slice';

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;
let id = 0;
const getId = () => `dndnode_${id++}`;

const useWorkingArea = ({onClose}: any)=>{
  const initialEdges =getInitialEdges();
  const initialNodes =getInitialNodes();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState<any>(null);
  const {setViewport} = useReactFlow();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const blockNode = useAppSelector(selectBlockNode);
  const isSetToWorkingArea = useAppSelector(selectIsSetToWorkingArea);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(()=>{
    if(isSetToWorkingArea) {
      const cloneNodes = [...nodes];

      const nodeIndex = cloneNodes.findIndex((node)=>node?.id === blockNode?.id);

      cloneNodes[nodeIndex]={...cloneNodes[nodeIndex], data: {
        ...cloneNodes[nodeIndex]?.data,
        title: blockNode?.data?.title,
        inputs: blockNode?.data?.inputs,
        outputs: blockNode?.data?.outputs,
        isTitle: blockNode?.data?.isTitle,
        type: blockNode?.data?.type

      }};
      setNodes(cloneNodes);

      onClose();
      dispatch(setBlockNode(null));
      dispatch(setIsSetToWorkingArea(false));
    }
  }, [isSetToWorkingArea, blockNode, nodes, updateNodeInternals]);

  const onConnect = useCallback((params: any) =>
    setEdges((eds) => addEdge({...params, label: 'new'}, eds)), [setEdges]);
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
      let a: any = document.createElement('a');
      a.setAttribute('href',
        `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(flow))}`);
      a.setAttribute('download', 'data.json');
      a.click();
      a=null;
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey) as any);

      if (flow) {
        const {x = 0, y = 0, zoom = 1} = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({x, y, zoom});
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: {type: 'nest', isTitle: true, icon: 'nest', title: 'readFile',
        inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo',
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight
      }
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);


  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect() as DOMRect;
      const type = event.dataTransfer.getData('type');
      const icon = event.dataTransfer.getData('icon');
      const content = event.dataTransfer.getData('content');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = rfInstance.project({
        x: event.clientX - reactFlowBounds?.left ?? 0,
        y: event.clientY - reactFlowBounds?.top ?? 0
      });
      const newNode = {
        id: getId(),
        position,
        type: 'turbo',
        data: {icon, type, isTitle: true, title: content,
          inputs: [{id: 1, title: 'input port 1'}],
          outputs: [{id: 1, title: 'output port 1'}] }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [rfInstance]
  );

  return {
    reactFlowWrapper,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setRfInstance,
    onDrop,
    updateNodeInternals,
    onDragOver,
    onSave,
    onRestore,
    onAdd,
    dispatch
  };
};

export default useWorkingArea;
