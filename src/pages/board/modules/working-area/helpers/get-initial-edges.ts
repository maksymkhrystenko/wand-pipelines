import {Edge} from 'reactflow';

const getInitialEdges= ()=>{
  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      data: {
        text: 'edge label'
      }
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      data: {
        text: 'edge label'
      }
    },
    {
      id: 'e2-5',
      source: '2',
      target: '5',
      data: {
        text: 'edge label'
      }
    },
    {
      id: 'e4-5',
      source: '4',
      target: '5',
      data: {
        text: 'edge label'
      }
    },
    {
      id: 'e5-6',
      source: '5',
      target: '6',
      data: {
        text: 'edge label'
      }
    }
  ];

  return initialEdges;
};

export default getInitialEdges;
