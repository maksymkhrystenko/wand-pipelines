import React from 'react';
import { Button, Checkbox, Select, Form, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import cn from 'classnames';

import useBlockEditorForm from './use-block-editor-form';
import {HANDLE_TYPE, PortType} from '../../../working-area/components/block-node/block-node';
import {BLOCK_TYPES} from '../../../working-area/helpers/get-initial-nodes';

import './block-editor-form.scss';

const BlockEditorForm = () => {
  const {
    blockNode,
    onBlockTypeChange,
    onAddBlockNodePort,
    onRemoveBlockNodePort,
    form,
    onFinish
  } = useBlockEditorForm();

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
      className="block-editor-form"
    >
      <Form.Item
        label="Label"
        name="title"
        rules={[{ required: true, message: 'Please input label!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="isTitle" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Show label</Checkbox>
      </Form.Item>
      {blockNode?.data?.type&& <Form.Item label="Process Type"
        name="type"
      >
        <Select
          style={{ width: 200 }}
          onChange={onBlockTypeChange}
        >
          {
            Object.values(BLOCK_TYPES).map((blockType: string)=>
              <Select.Option title={blockType} key={blockType} value={blockType}>
                <div className={cn('block-editor-form__cloud',
                  `block-editor-form__cloud--with-${blockType}-icon`)}/>
              </Select.Option>)
          }
        </Select>
      </Form.Item>}
      <div >Port labels</div>
      <div className="block-editor-form__additional-caption">Inputs</div>
      {
        blockNode?.data?.inputs?.map((input:PortType)=>
          <div className="block-editor-form__item"
            key={`inputTitle${input?.id}`}>
            <Form.Item
              label={`input ${input?.id}`}
              name={`inputTitle${input?.id}`}
              rules={[{ required: true, message: 'Please fill input!' }]}
            >
              <Input />
            </Form.Item><Button htmlType="button" onClick={()=>{
              onRemoveBlockNodePort(input, HANDLE_TYPE.TARGET);
            }}>
              <CloseOutlined />
            </Button>
          </div>)
      }
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={()=>{
          onAddBlockNodePort(HANDLE_TYPE.TARGET);
        }} >
                Add input
        </Button>
      </Form.Item>
      <div className="block-editor-form__additional-caption">Outputs</div>
      {
        blockNode?.data?.outputs?.map((output:PortType)=>
          <div className="block-editor-form__item"
            key={`outputTitle${output?.id}`}> <Form.Item key={`outputTitle${output?.id}`}
              label={`output ${output?.id}`}
              name={`outputTitle${output?.id}`}
              rules={[{ required: true, message: 'Please fill input!' }]}
            >
              <Input
              />
            </Form.Item> <Button htmlType="button" onClick={()=>{
              onRemoveBlockNodePort(output, HANDLE_TYPE.SOURCE);
            }}>
              <CloseOutlined />
            </Button>
          </div>)
      }
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={()=>{
          onAddBlockNodePort(HANDLE_TYPE.SOURCE);
        }} >
                Add output
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
                Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlockEditorForm;
