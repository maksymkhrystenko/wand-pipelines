import {useEffect} from 'react';
import { Form } from 'antd';

import {selectBlockNode, setBlockNode,
  setIsSetToWorkingArea} from '../../../working-area/slices/working-area-slice';
import {useAppDispatch, useAppSelector} from '../../../../../../app/hooks';

import {HANDLE_TYPE, PortType} from '../../../working-area/components/block-node/block-node';

import './block-editor-form.scss';

const useBlockEditorForm= () => {
  const blockNode = useAppSelector(selectBlockNode);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const getPorts = (values: any, type: string)=>{
    const ports: PortType[]=[];
    const fieldType= type ===HANDLE_TYPE.TARGET?'input':'output';
    Object.keys(values)?.forEach((field)=>{
      const portId = field.split('Title');
      if(portId?.[0]===fieldType) {
        ports?.push({
          id: Number(portId?.[1]),
          title: values[field]
        });
      }
    });

    return ports;
  };

  const onFinish = (values: any) => {
    dispatch(setBlockNode({...blockNode,
      data: {...blockNode?.data, title: values?.title,
        inputs: getPorts(values, HANDLE_TYPE.TARGET),
        outputs: getPorts(values, HANDLE_TYPE.SOURCE), isTitle: values?.isTitle }}));
    dispatch(setIsSetToWorkingArea(true));
  };

  const handleAddBlockNodePort = (type: string) => {
    const formFields = form.getFieldsValue();
    const outputs = getPorts(formFields, HANDLE_TYPE.SOURCE);
    const inputs = getPorts(formFields, HANDLE_TYPE.TARGET);
    if(type=== HANDLE_TYPE.SOURCE) {
      const portId =(blockNode?.data?.outputs?.[blockNode?.data?.outputs?.length-1]?.id ??0)+1;

      dispatch(setBlockNode({...blockNode,
        data: {...blockNode?.data, inputs,
          outputs: outputs?.concat({title: `output port ${portId}`, id: portId}) }}));
    }else{
      const portId =(blockNode?.data?.inputs?.[blockNode?.data?.inputs?.length-1]?.id ??0)+1;

      dispatch(setBlockNode({...blockNode,
        data: {...blockNode?.data, outputs,
          inputs: inputs?.concat({title: `input port ${portId}`, id: portId}) }}));
    }
  };

  const handleBlockTypeChange = (type: string) => {
    dispatch(setBlockNode({...blockNode, data: {...blockNode?.data, type}}));
    form.setFieldsValue({
      type
    });
  };

  const handleRemoveBlockNodePort = (port: PortType, type: string) => {
    const formFields = form.getFieldsValue();
    const outputs = getPorts(formFields, HANDLE_TYPE.SOURCE);
    const inputs = getPorts(formFields, HANDLE_TYPE.TARGET);

    if(type=== HANDLE_TYPE.SOURCE) {
      dispatch(setBlockNode({...blockNode, data: {...blockNode?.data, inputs,
        outputs: outputs?.filter((output)=>output?.id !== port?.id) }}));
    }else{
      dispatch(setBlockNode({...blockNode, data: {...blockNode?.data, outputs,
        inputs: inputs?.filter((input)=>input?.id !== port?.id) }}));
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      title: blockNode?.data?.title,
      isTitle: blockNode?.data?.isTitle,
      type: blockNode?.data?.type
    });
    blockNode?.data?.inputs?.forEach((input:PortType)=>{
      form.setFieldsValue({
        [`inputTitle${input?.id}`]: input?.title
      });
    });
    blockNode?.data?.outputs?.forEach((output:PortType)=>{
      form.setFieldsValue({
        [`outputTitle${output?.id}`]: output?.title
      });
    });
  }, [form, blockNode]);

  return {
    onBlockTypeChange: handleBlockTypeChange,
    blockNode,
    onAddBlockNodePort: handleAddBlockNodePort,
    onFinish,
    onRemoveBlockNodePort: handleRemoveBlockNodePort,
    form
  };
};

export default useBlockEditorForm;
