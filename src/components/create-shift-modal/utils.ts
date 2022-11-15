import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const getInitialDates = (): { start: string; finish: string } => {
  const currentDate = new Date();
  const shiftDuration = 90;
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + shiftDuration
  );
  return {
    start: format(currentDate, 'dd.MM.yyyy', { locale: ru }),
    finish: format(lastDay, 'dd.MM.yyyy', { locale: ru }),
  };
};

const splitDate = (date: string, splitTemplate: string): Array<number> =>
  date.split(splitTemplate).map((item) => Number(item));

export const getNumberOfDays = (start: string, finish: string): number => {
  const separatedDatesStart = splitDate(start, '.');
  const separatedDatesFinish = splitDate(finish, '.');

  const startDate = new Date(
    separatedDatesStart[2],
    separatedDatesStart[1] - 1,
    separatedDatesStart[0]
  );
  const finishDate = new Date(
    separatedDatesFinish[2],
    separatedDatesFinish[1] - 1,
    separatedDatesFinish[0]
  );
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = finishDate.getTime() - startDate.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

export const changeFormatDates = (date: string, formatTemplate: string): string => {
  const splitParts = splitDate(date, '.');
  const newDate = new Date(splitParts[2], splitParts[1], splitParts[0]);

  return format(newDate, formatTemplate, { locale: ru });
};
