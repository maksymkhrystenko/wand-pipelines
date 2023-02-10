import getToolsPaneConfig from './configs/get-tools-pane-config';

import './tools-pane.scss';


const useToolsPane = () => {
  const toolsPaneConfig = getToolsPaneConfig();

  const onDragStart = (event: any, {icon, type, content}:any) => {
    event.dataTransfer.setData('type', type);
    event.dataTransfer.setData('content', content);
    event.dataTransfer.setData('icon', icon);
    event.dataTransfer.effectAllowed = 'move';
  };

  return {onDragStart, toolsPaneConfig};
};

export default useToolsPane;
