import {Collapse, Layout} from 'antd';
import React from 'react';

import ProcessBlock from './components/process-block/process-block';
import useToolsPane from './use-tools-pane';

import './tools-pane.scss';

const {Panel} = Collapse;
const {Sider} = Layout;

const ToolsPane = () => {
  const {onDragStart, toolsPaneConfig} = useToolsPane();

  return (
    <Sider className="tools-pane">
      <Collapse defaultActiveKey={['2']} onChange={() => {
      }}>
        {
          toolsPaneConfig?.map((panel) => <Panel header={panel?.header} key={panel?.key}>
            {panel?.processBlocks?.map((processBlock, index) =>
              <ProcessBlock key={index}
                onDragStart={onDragStart}
                icon={processBlock?.icon}
                type={processBlock?.type}
                className={processBlock?.className}
                content={processBlock?.content}
              />)}
          </Panel>)
        }
      </Collapse>
    </Sider>
  );
};

export default ToolsPane;
