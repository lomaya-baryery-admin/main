import { IDateRange } from '.';

export const getMonth = (date: Date): string => {
  const splitMonth = [
    ...date.toLocaleDateString('ru-RU', {
      month: 'long',
    }),
  ];
  splitMonth[0] = splitMonth[0].toUpperCase();

  const monthName = splitMonth.join('');

  return monthName;
};

type TWeekDay =
  | 'понедельник'
  | 'вторник'
  | 'среда'
  | 'четверг'
  | 'пятница'
  | 'суббота'
  | 'воскресенье';

export const getShortenWeekDay = (formattedDate: string) => {
  switch (formattedDate as TWeekDay) {
    case 'понедельник':
      return 'Пн';
    case 'вторник':
      return 'Вт';
    case 'среда':
      return 'Ср';
    case 'четверг':
      return 'Чт';
    case 'пятница':
      return 'Пт';
    case 'суббота':
      return 'Сб';
    case 'воскресенье':
      return 'Вс';
    default:
      return 'error';
  }
};

export type TShift = {
  type: 'preparing' | 'started';
  currentShiftRange: [started_at: string | undefined, finished_at: string | undefined];
};

export const getStartDate = (shift: IDateRange['shift']): Date => {
  let startDate: Date = new Date();

  if (shift.type === 'preparing' && shift.currentShiftRange[1]) {
    startDate = new Date(shift.currentShiftRange[1]);
    startDate.setDate(startDate.getDate() + 1);
  } else if (shift.type === 'started') {
    startDate = shift.currentShiftRange[0] ? new Date(shift.currentShiftRange[0]) : startDate;
  }
  startDate.setHours(0, 0, 0, 0);
  return startDate;
};

export const getFinishDate = (shift: TShift) => {
  let finishDate: Date = new Date();

  finishDate.setDate(finishDate.getDate() + 1);

  if (shift.type === 'preparing' && shift.currentShiftRange[1]) {
    finishDate = new Date(shift.currentShiftRange[1]);
    finishDate.setDate(finishDate.getDate() + 2);
  } else if (shift.type === 'started') {
    finishDate = shift.currentShiftRange[1] ? new Date(shift.currentShiftRange[1]) : finishDate;
  }
  finishDate.setHours(0, 0, 0, 0);
  return finishDate;
};
