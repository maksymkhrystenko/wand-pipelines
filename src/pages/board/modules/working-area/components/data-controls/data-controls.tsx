import React from 'react';
import {Button} from 'antd';

import './data-controls.scss';

function DataControls({onSave, onRestore}:any) {
  return <div className="data-controls">
    <Button onClick={onSave}>
            Save data to JSON
    </Button>
    <Button onClick={onRestore}>
            Restore
    </Button>
  </div>;
}

export default DataControls;
