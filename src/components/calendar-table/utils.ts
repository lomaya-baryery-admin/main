import { taskWordForms } from './consts';
import { IRowData, ITableData, ITaskData, ITasksCount } from './types';

export const getCurrentWordForm = (tasksCount: number): string => {
  const pluralRule = new Intl.PluralRules('ru');
  return taskWordForms[pluralRule.select(tasksCount)];
};

export const getTableTitle = (tableData: ITableData): string => {
  const tasksCount: ITasksCount = {
    declined: 0,
    approved: 0,
    under_review: 0,
  };
  tableData.forEach((item: IRowData) => {
    item.tasks.forEach((task: ITaskData) => {
      tasksCount[task.status] += 1;
    });
  });
  const { approved, declined, under_review: review } = tasksCount;
  return `Выполнил(а) ${approved} ${getCurrentWordForm(
    approved
  )}, ${declined} не прошли проверку, ${review} ожидают проверку`;
};
