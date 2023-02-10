import {BlockNodeData} from '../components/block-node/block-node';

export const BLOCK_TYPES={
  NEST: 'nest',
  FILTER: 'filter',
  HOME: 'home'
};

const getInitialNodes= ()=>{
  const initialNodes: BlockNodeData[] = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: {
        type: BLOCK_TYPES.NEST,
        icon: BLOCK_TYPES.NEST,
        title: 'readFile',
        isTitle: true,
        inputs: [
          {id: 1, title: 'input port 1'}
        ],
        outputs: [
          {id: 1, title: 'output port 1'}
        ]
      },
      type: 'turbo'
    },
    {
      id: '2',
      position: { x: 250, y: 0 },
      data: {type: BLOCK_TYPES.NEST, icon: BLOCK_TYPES.NEST,
        isTitle: true, title: 'bundle', inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo'
    },
    {
      id: '3',
      position: { x: 0, y: 250 },
      data: {type: BLOCK_TYPES.FILTER,
        isTitle: true, icon: BLOCK_TYPES.FILTER, title: 'readFile',
        inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo'
    },
    {
      id: '4',
      position: { x: 250, y: 250 },
      data: {type: BLOCK_TYPES.NEST,
        isTitle: true, icon: BLOCK_TYPES.NEST, title: 'bundle',
        inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo'
    },
    {
      id: '5',
      position: { x: 500, y: 125 },
      data: {type: BLOCK_TYPES.FILTER,
        isTitle: true, icon: BLOCK_TYPES.FILTER, title: 'concat',
        inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo'
    },
    {
      id: '6',
      position: { x: 750, y: 125 },
      data: {type: BLOCK_TYPES.HOME,
        isTitle: true, icon: BLOCK_TYPES.HOME, title: 'fullBundle',
        inputs: [{id: 1, title: 'input port 1'}],
        outputs: [{id: 1, title: 'output port 1'}] },
      type: 'turbo'
    }
  ];

  return initialNodes;
};

export default getInitialNodes;
