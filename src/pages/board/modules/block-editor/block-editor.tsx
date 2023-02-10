import {Drawer} from 'antd';
import React from 'react';

import BlockEditorForm from './components/block-editor-form/block-editor-form';

const BlockEditor = ({onClose, open }:any) => {
  return <Drawer title="Appearance" placement="right" onClose={onClose} open={open}>
    <BlockEditorForm />
  </Drawer>;
};

export default BlockEditor;
