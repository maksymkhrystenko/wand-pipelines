import React from 'react';
import cn from 'classnames';

import './process-block.scss';

const ProcessBlock = ({onDragStart, icon, type, content}: any) => {
  return <div
    className="process-block"
    onDragStart={(event) => onDragStart(event, {icon, type, content})}
    draggable
  >
    <div className="process-block__inner">
      <div className={cn('process-block__cloud', `process-block__cloud--with-${icon}-icon`)} />
      <div className="process-block__body">
        <div className="process-block__title">{content}</div>
      </div>
    </div>
  </div>;
};

export default ProcessBlock;
