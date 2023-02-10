import React, {memo, ReactNode, useEffect} from 'react';
import {Handle, NodeProps, Position, useUpdateNodeInternals, XYPosition} from 'reactflow';
import { Tooltip } from 'antd';
import cn from 'classnames';

import './block-node.scss';

export const HANDLE_TYPE = {
  SOURCE: 'source',
  TARGET: 'target'
};

export type PortType = {
id: number,
    title:string
}

export type NodeData = {
    title: string;
    type?: string | undefined;
    icon?: ReactNode;
    isTitle?: boolean,
    inputs?: PortType[],
    outputs?: PortType[]
}

export type BlockNodeData = {
    id: string,
    position: XYPosition,
    data: NodeData,
    type?: string,
};

const DynamicHandle = ({ idx, type, title }:any) => {
  return (
    <Tooltip title={title}>
      <Handle
        isValidConnection={()=>true}
        type={type}
        id={`${type}${idx}`}
        position={type===HANDLE_TYPE.SOURCE?Position.Right:Position.Left}
        style={{ top: 10 + idx * 20 }}
      />
    </Tooltip>
  );
};

const BlockNode = (props:NodeProps<NodeData>) => {
  const { data, id }=props;
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(()=>{
    updateNodeInternals(id);
  }, [id, data?.inputs?.length, data?.outputs?.length]);

  return (
    <div className="block-node block-node--with-gradient">
      <div className="block-node__inner">
        {data?.inputs?.map((input, i) =>
          <DynamicHandle id={id} key={input?.id}
            idx={input?.id} title={input?.title} type={HANDLE_TYPE.TARGET} />
        )}
        <div className={cn('block-node__cloud', `block-node__cloud--with-${data?.type}-icon`)} />
        <div className="block-node__cloud" />
        <div className="block-node__body">
          {data?.isTitle&&<div className="block-node__title">{data?.title}</div>}
        </div>
        {data?.outputs?.map((output, i) =>
          <DynamicHandle key={output?.id}
            idx={output?.id} title={output?.title} type={HANDLE_TYPE.SOURCE} />
        )}
      </div>
    </div>
  );
};

export default memo(BlockNode);
