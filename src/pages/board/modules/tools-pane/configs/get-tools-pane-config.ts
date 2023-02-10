const getToolsPaneConfig = ()=>[{
  header: 'Actual Blocks',
  key: '1',
  processBlocks: [
    {
      className: 'dndnode input',
      content: 'Exec',
      type: 'exec',
      icon: 'home'
    },
    {
      className: 'dndnode input',
      content: 'Filter',
      type: 'filter',
      icon: 'filter'
    }
  ]
},
{
  header: 'Nest',
  key: '2',
  processBlocks: [
    {
      className: 'dndnode input',
      content: 'Nest Request',
      type: 'nest',
      icon: 'nest'
    },
    {
      className: 'dndnode',
      content: 'Nest Status',
      type: 'nest',
      icon: 'nest'
    },
    {
      className: 'dndnode',
      content: 'Temp',
      type: 'nest',
      icon: 'nest'
    }
  ]
}
];

export default getToolsPaneConfig;
