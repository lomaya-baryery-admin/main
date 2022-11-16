import cn from 'classnames';
import styles from './index.module.css';
import { CellText } from './cell-text';
import { useCallback } from 'react';

interface ITable extends React.PropsWithChildren {
  gridClassName: string;
  header: string[];
  extClassName?: string;
  renderRows: (tableRowStyles: CSSModuleClasses[string]) => JSX.Element;
}

export const Table: React.FC<ITable> = ({ header, gridClassName, extClassName, renderRows }) => {
  const renderingRows = useCallback(() => {
    return renderRows(styles.table__row);
  }, [renderRows]);

  return (
    <section className={cn(styles.table, extClassName)}>
      <div className={cn(styles.table__row, styles.table__headingRow, gridClassName)}>
        {header.map((title) => {
          return <CellText key={title} text={title} type={'secondary'} />;
        })}
      </div>
      {renderingRows()}
    </section>
  );
};

export { CellText } from './cell-text';
export { CellLink } from './cell-link';
