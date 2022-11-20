import React from 'react';
import cn from 'classnames';

export interface ICellTextProps {
  date: string;
  extClassName?: string;
}

export const CellDate: React.FC<ICellTextProps> = ({ date, extClassName }) => {
  const renderDate = date.split('-').reverse().join('.');

  return (
    <p className={cn(extClassName, 'text', 'text_type_main-default', `text_color_primary`, 'm-0')}>
      {renderDate}
    </p>
  );
};
