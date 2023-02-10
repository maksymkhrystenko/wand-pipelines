import React from 'react';
import {
  ReactFlowProvider
} from 'reactflow';

import ToolsPane from './modules/tools-pane/tools-pane';
import BlockEditor from './modules/block-editor/block-editor';
import WorkingArea from './modules/working-area/working-area';
import useBoard from './use-board';

import 'antd/dist/reset.css';
import 'reactflow/dist/base.css';
import './board.scss';

const Board = () => {
  const { onClose, showDrawer, open} = useBoard();

  return (
    <div className="board">
      <ReactFlowProvider>
        <div className="board__layout">
          <BlockEditor onClose={onClose} open={open} />
          <ToolsPane />
          <WorkingArea onClose={onClose} showDrawer={showDrawer} />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Board;
