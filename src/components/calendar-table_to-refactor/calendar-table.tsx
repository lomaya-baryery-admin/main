import React from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { ITableData, ITaskData, TTableBlock } from './types';
import { maxRowsCount } from './consts';
import { getTableTitle, getDatesForHeaderCells } from './utils';
import styles from './calendar-table.module.css';
import { StatusIcon } from './status-icon/status-icon';

interface Props {
  tableData: ITableData;
  isShowTitle?: boolean;
  withoutExternalBorders?: boolean;
  tableBorderBottomRadius?: string;
  shiftStartDate: string;
}

export const CalendarTable: React.FC<Props> = ({
  tableData,
  isShowTitle,
  withoutExternalBorders,
  tableBorderBottomRadius,
  shiftStartDate,
}) => {
  const getWithoutBorderClasses = (tableBlock: TTableBlock) => {
    switch (tableBlock) {
      case 'title':
        return withoutExternalBorders
          ? `${styles.withoutBorderTop} ${styles.withoutBorderLeft} ${styles.withoutBorderRight}`
          : '';
      case 'firstColumn':
        return withoutExternalBorders ? styles.withoutBorderLeft : '';
      case 'lastColumn':
        return withoutExternalBorders ? styles.withoutBorderRight : '';
      case 'header':
        return withoutExternalBorders ? styles.withoutBorderTop : '';
      default:
        return '';
    }
  };

  const renderHeader = () => {
    const columns = getDatesForHeaderCells(shiftStartDate);
    return columns.map((item: string | number, index: number): React.ReactNode => {
      const headerCellValue = typeof item === 'string' ? new Date(item).getDate() : item;
      return (
        <th
          key={item}
          className={`${styles.cell} ${styles.header} 
      ${index === columns.length - 1 ? getWithoutBorderClasses('lastColumn') : ''}
      ${!isShowTitle ? getWithoutBorderClasses('header') : ''}`}
        >
          {headerCellValue}
        </th>
      );
    });
  };

  const renderCells = (rowIndex: number): React.ReactNode => {
    const columns = getDatesForHeaderCells(shiftStartDate, rowIndex);
    return columns.map((item: string | number, index: number) => {
      const isNotActiveDay = typeof item === 'number';
      const task = tableData.filter((task: ITaskData) => task?.date === item);
      const taskStatus = task[0]?.status;
      const currentTaskDate = task[0]?.date;
      const taskDate = currentTaskDate
        ? format(new Date(currentTaskDate), 'dd.MM.yy', { locale: ru })
        : '';

      return (
        <td
          key={item}
          className={`${styles.cell} ${isNotActiveDay ? styles.notActiveDay : ''} 
        ${index === columns.length - 1 ? getWithoutBorderClasses('lastColumn') : ''}`}
        >
          {task.length > 0 ? (
            <StatusIcon status={taskStatus} tooltipText={`Дата выдачи: ${taskDate}`} />
          ) : (
            ''
          )}
        </td>
      );
    });
  };

  const renderRows = (): React.ReactNode =>
    Array.from(Array(maxRowsCount).keys()).map((item, index) => {
      const month = `М${item + 1}`;
      return (
        <tr
          key={item}
          className={styles.row}
          style={{
            borderBottomRightRadius: tableBorderBottomRadius,
            borderBottomLeftRadius: tableBorderBottomRadius,
          }}
        >
          <td
            key={month}
            className={`${styles.cell} ${styles.header} ${getWithoutBorderClasses('firstColumn')}`}
          >
            {month}
          </td>
          {renderCells(index)}
        </tr>
      );
    });

  return (
    <table className={styles.table}>
      <thead>
        {isShowTitle && (
          <tr className={`${styles.title} ${getWithoutBorderClasses('title')}`}>
            <th>{getTableTitle(tableData)}</th>
          </tr>
        )}

        <tr className={styles.row}>
          <th
            className={`${styles.cell} ${styles.header} ${getWithoutBorderClasses('firstColumn')} ${
              !isShowTitle ? getWithoutBorderClasses('header') : ''
            }`}
          >
            №
          </th>
          {renderHeader()}
        </tr>
      </thead>
      <tbody className={styles.tbody}>{renderRows()}</tbody>
    </table>
  );
};
