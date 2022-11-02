import { createColumnHelper } from '@tanstack/react-table';
import { StatusLabel } from '../stories/status-label/status-label';
import { statusLable } from './constants';
// типы

// колонки для таблицы Смены TODO: скорректировать названия после того, как будет добавлен бэк!
type TAllShiftColumns = {
  number: number,
  shift_name: string,
  date_start: string,
  date_end: string,
  count_members: number,
  status: string,
};

// хардкод для таблицы Смены TODO: убрать после того, как данные будут приходить с сервера
export const AllShiftData:TAllShiftColumns[] = [
  {
    number: 1,
    shift_name: 'Радостная радость',
    date_start: '00-00-0000',
    date_end: '00-00-0000',
    count_members: 777,
    status: 'new',
  },
  {
    number: 2,
    shift_name: 'Грустная грусть',
    date_start: '00-00-0000',
    date_end: '00-00-0000',
    count_members: 2,
    status: 'past',
  },
  {
    number: 3,
    shift_name: 'Мечтательная мечта',
    date_start: '00-00-0000',
    date_end: '00-00-0000',
    count_members: 175,
    status: 'current',
  },
]

// типы для тестовой таблицы
type TTestTable = {
  one: string,
  two: number,
  three: string,
}

// хардкод для тестовой таблицы
export const testData:TTestTable[] = [
  {
  one: 'Петя Петров',
  two: 33,
  three: 'любит пельмени',
  },
  {
    one: 'Катя Иванова',
    two: 12,
    three: 'любит чипсы',
  },
  {
    one: 'БЛАБЛАБАЛ',
    two: 444,
    three: 'блаблабла',
  },
]
const shiftColumnsHelper = createColumnHelper<TAllShiftColumns>();
const testColumnsHelper = createColumnHelper<TTestTable>();
// дефолтные данные
export const testColumns = [
  testColumnsHelper.accessor(row => row.one, {
    header: 'Столбец 1',
    cell: info => info.getValue(),
  }),
  testColumnsHelper.accessor(row => row.two, {
    header: 'Столбец 2',
    cell: info => info.getValue(),
  }),
  testColumnsHelper.accessor(row => row.three, {
    header: 'Столбец 3',
    cell: info => info.getValue(),
  }),
]
// смены
export const shiftColumns = [
  shiftColumnsHelper.accessor(row => row.number, {
    header: 'Номер смены',
    id: 'number',
    cell: info => <a href="#" className="text text_type_main-default spreadsheetLink">{info.getValue()}</a>,
  }),
  shiftColumnsHelper.accessor(row => row.shift_name, {
    id: 'shift-name',
    header: 'Название смены',
    cell: info => <a href="#" className="text text_type_main-default spreadsheetLink">{info.getValue()}</a>,
  }),
  shiftColumnsHelper.accessor(row => row.date_start, {
    id: 'date_start',
    header: 'Дата старта',
    cell: info => info.getValue(),
  }),
  shiftColumnsHelper.accessor(row => row.date_end, {
    id: 'date_end',
    header: 'Дата окончания',
    cell: info => info.getValue(),
  }),
  shiftColumnsHelper.accessor(row => row.count_members, {
    id: 'count-members',
    header: 'К-во участников',
    cell: info => info.getValue(),
  }),
  shiftColumnsHelper.accessor(row => row.status, {
    id: 'status',
    header: 'Статус',
    cell: status => {
      const value = status.getValue();
      return <StatusLabel statusText={statusLable(value)} type={value} />
    },
  }),
]