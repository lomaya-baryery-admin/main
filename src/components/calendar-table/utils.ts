import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { taskWordForms, maxDaysCount } from './consts';
import { ITableData, ITaskData, ITasksCount } from './types';

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
  tableData.forEach((task: ITaskData) => {
    tasksCount[task.status] += 1;
  });
  const { approved, declined, under_review: review } = tasksCount;
  return `Выполнил(а) ${approved} ${getCurrentWordForm(
    approved
  )}, ${declined} не прошли проверку, ${review} ожидают проверку`;
};

export const getDatesForHeaderCells = (
  shiftStartDate: string,
  rowIndex = 0
): Array<string | number> => {
  const shiftStartDateToDate: Date = new Date(shiftStartDate);
  const startDate: Date = new Date(
    shiftStartDateToDate.getFullYear(),
    shiftStartDateToDate.getMonth() + rowIndex,
    shiftStartDateToDate.getDate()
  );
  const countOfDaysInStartMonth: number = new Date(
    startDate?.getFullYear(),
    startDate?.getMonth() + 1,
    0
  ).getDate();
  const daysCountInFirstMonth: number = countOfDaysInStartMonth - startDate?.getDate();
  const result: Array<Date | number> = [startDate];

  for (let i = 0; i < daysCountInFirstMonth; i += 1) {
    result.push(
      new Date(startDate?.getFullYear(), startDate?.getMonth(), startDate?.getDate() + (i + 1))
    );
  }

  const lastElInResult = result[result.length - 1];
  const lastDayInResult =
    lastElInResult instanceof Date ? lastElInResult.getDate() : lastElInResult;

  if (lastDayInResult < maxDaysCount) {
    const diff = maxDaysCount - lastDayInResult;
    for (let i = 0; i < diff; i += 1) {
      result.push(lastDayInResult + (i + 1));
    }
  }

  Array.from(Array(maxDaysCount - result.length).keys()).forEach((item, index) => {
    result.push(1 + index);
  });

  return result.map((item: Date | number) => {
    if (item instanceof Date) {
      return format(item, 'yyyy-MM-dd', { locale: ru });
    }

    if (item > countOfDaysInStartMonth) {
      return item;
    }
    return format(new Date(startDate.getFullYear(), startDate.getMonth() + 1, item), 'yyyy-MM-dd', {
      locale: ru,
    });
  });
};
