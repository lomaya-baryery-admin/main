import React from 'react';
import { CircleWarningIcon, CircleCheckIcon, CircleStopIcon } from '../../stories/icons';
import { ITableData, IStatusIcons, IRowData, ITaskData, ITasksCount } from './types';
import { getCurrentWordForm } from './utils';
import styles from './table.module.css';

interface Props {
  tableData: ITableData,
  isShowTitle?: boolean,
}

export const Table = () => {
  const isShowTitle = true;
  const columnsCountToArray = Array.from(Array(31).keys());
  const data: ITableData = [
    {
      taskStatuses: [
        {
          date: "2022-09-01",
          status: 'under_review'
        },
        {
          date: "2022-09-02",
          status: 'approved'
        }
      ],
    },
    {
      taskStatuses: [
        {
          date: "2022-02-03",
          status: 'declined'
        },
        {
          date: "2022-02-04",
          status: 'approved'
        }
      ],
    },
  ];

  const statusIcons: IStatusIcons = {
    under_review: <CircleWarningIcon type='pending' size='24' />,
    approved: <CircleCheckIcon type='success' size='24' />,
    declined: <CircleStopIcon type='error' size='24' />
  }

  const renderTitle = (): string => {
    const tasksCount: ITasksCount = {
      declined: 0,
      approved: 0,
      under_review: 0
    }
    data.forEach((item: IRowData) => {
      item.taskStatuses.forEach((task: ITaskData) => {
        tasksCount[task.status] += 1
      })
    });
    const { approved, declined, under_review: review } = tasksCount;
    return `Выполнил(а) ${approved} ${getCurrentWordForm(approved)}, ${declined} не прошли проверку, ${review} ожидают проверку`;
  }


  const renderHeader = () => columnsCountToArray.map((item: number): React.ReactNode =>
  (
    <th key={item} className={`${styles.cell} ${styles.header}`}>
      {item + 1}
    </th>
  )
  );

  const renderCells = (rowData: IRowData): React.ReactNode => columnsCountToArray.map((_: number, index: number) => {
    const date = new Date(rowData.taskStatuses[0]?.date);
    const countOfDaysInMonth = new Date(date?.getFullYear(), date?.getMonth() + 1, 0).getDate();
    const isNotActiveDay = index >= countOfDaysInMonth;
    const task = rowData.taskStatuses.filter((item: ITaskData) => new Date(item?.date).getDate() === index + 1);
    const taskStatus = task[0]?.status;
    const icon = statusIcons[taskStatus];
    const key = countOfDaysInMonth + index;

    return (
      <td key={key} className={`${styles.cell} ${isNotActiveDay ? styles.notActiveDay : ''}`}>
        {task.length > 0 ? icon : ''}
      </td>
    );
  });

  const renderRows = (): React.ReactNode => data.map((item: IRowData, index: number) => {
    const key = Math.floor(Math.random() * index);
    const month = `м${index + 1}`
    return (
      <tr key={key} className={styles.row}>
        <td key={month} className={`${styles.cell} ${styles.header}`}>{month}</td>
        {renderCells(item)}
      </tr>
    )
  })

  return (
    <table className={styles.table}>
      {isShowTitle && (
        <tr className={styles.title}>{renderTitle()}</tr>
      )}
      <tr className={styles.row}>
        <th className={`${styles.cell} ${styles.header}`}>№</th>
        {renderHeader()}
      </tr>
      {renderRows()}
    </table>
  );
};
