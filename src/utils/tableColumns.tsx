import { createColumnHelper } from '@tanstack/react-table';
import { StatusLabel } from '../stories/status-label/status-label';
import { statusLable } from './constants';
import { ImagePreview } from '../stories/image-preview/ImagePreview';
import { ReactElement } from 'react';
// -----------------------------------------------типы

// колонки для таблицы Смены TODO: скорректировать названия после того, как будет добавлен бэк!
type TAllShiftColumns = {
  number: number,
  shift_name: string,
  date_start: string,
  date_end: string,
  count_members: number,
  status: string,
};

// типы для таблицы отчеты участников TODO: скорректировать названия после того, как будет добавлен бэк!
type TAllReportsTable = {
  task_name: string,
  user_name: string,
  task_date: string,
  preview: string,
  buttons?: any,
}

// типы для тестовой таблицы
type TTestTable = {
  one: string,
  two: number,
  three: string,
}
// ---------------------------------------------- хардкод

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
];

// хардкод для таблицы ОТЧЕТЫ УЧАСТНИКОВ
export const AllReportsData:TAllReportsTable[] =[
  {
    task_name: 'Название задания',
    user_name: 'Иванов Иван',
    task_date: '00/00/0000',
    preview: 'https://i.pinimg.com/474x/09/79/84/097984d23edbf5290d611a270f944fd6.jpg',
    buttons: '',
  },
  {
    task_name: 'Название задания 2',
    user_name: 'Иванов Иван 2',
    task_date: '00/00/0000',
    preview: 'https://i.pinimg.com/474x/09/79/84/097984d23edbf5290d611a270f944fd6.jpg',
    buttons: '',
  },
]

// ----------------------------------тут начинаются даные для таблиц!

const shiftColumnsHelper = createColumnHelper<TAllShiftColumns>();
const testColumnsHelper = createColumnHelper<TTestTable>();
const allReportsColumnsHelper = createColumnHelper<TAllReportsTable>();
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

// все отчеты участников
export const allReportsColumns = [
  allReportsColumnsHelper.accessor(row => row.task_name, {
    header: 'Название задания',
    cell: info => info.getValue(),
  }),
  allReportsColumnsHelper.accessor(row => row.user_name, {
    header: 'Имя и фамилия',
    cell: info => info.getValue(),
  }),
  allReportsColumnsHelper.accessor(row => row.task_date, {
    header: 'Дата и время отправки',
    cell: info => info.getValue(),
  }),
  allReportsColumnsHelper.accessor(row => row.preview, {
    header: 'Превью',
    cell: info => <ImagePreview url={info.getValue()} title="Фотоотчет" />,
  }),
  allReportsColumnsHelper.accessor(row => row.buttons, {
    header: ' ',
    cell: 'тут будут кнопки',
  }),
]