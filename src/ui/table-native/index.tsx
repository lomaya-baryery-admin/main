import { useCallback } from 'react';
import cn from 'classnames';
import { CellText } from './cell-text';
import styles from './index.module.css';

interface ITable extends React.PropsWithChildren {
  gridClassName: string;
  header: string[];
  extClassName?: string;
  renderRows: (tableRowStyles: CSSModuleClasses[string]) => JSX.Element | null;
}

export const Table: React.FC<ITable> = ({
  header,
  gridClassName,
  extClassName,
  renderRows,
  children,
}) => {
  const renderingRows = useCallback(() => renderRows(styles.table__row), [renderRows]);

  return (
    <section className={cn(styles.table, extClassName)}>
      <div className={cn(styles.table__row, styles.table__headingRow, gridClassName)}>
        {header.map((title) => (
          <CellText key={title} text={title} type="secondary" />
        ))}
      </div>
      {renderingRows()}
      {children}
    </section>
  );
};

export { CellText } from './cell-text';
export { CellLink } from './cell-link';
