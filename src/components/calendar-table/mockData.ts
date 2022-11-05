import { ITableData } from './types';
// TODO перепроверить названия статусов после готовности бека
export const dataForCalendarTable: ITableData = [
  {
    taskStatuses: [
      {
        date: '2022-09-03',
        status: 'under_review',
      },
      {
        date: '2022-09-04',
        status: 'approved',
      },
    ],
  },
  {
    taskStatuses: [
      {
        date: '2022-02-01',
        status: 'declined',
      },
      {
        date: '2022-02-02',
        status: 'approved',
      },
    ],
  },
  {
    taskStatuses: [
      {
        date: '2022-10-01',
        status: 'declined',
      },
      {
        date: '2022-10-02',
        status: 'under_review',
      },
    ],
  },
];
