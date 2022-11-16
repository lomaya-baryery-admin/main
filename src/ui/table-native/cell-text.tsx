import cn from 'classnames';
import React from 'react';
import styles from './cell-text.module.css';

export interface ICellTextProps {
  text: string | number;
  type?: 'primary' | 'secondary';
  extClassName?: string;
}

export const CellText: React.FC<ICellTextProps> = ({ text, type = 'primary', extClassName }) => {
  return (
    <p
      className={cn(
        styles.cellText,
        extClassName,
        'text',
        'text_type_main-default',
        `text_color_${type}`,
        'm-0'
      )}
    >
      {text}
    </p>
  );
};
