import { ITableData } from './types';
// TODO перепроверить названия статусов после готовности бека
export const dataForCalendarTable: ITableData = [
  {
    date: '2022-09-25',
    status: 'under_review',
  },
  {
    date: '2022-09-26',
    status: 'approved',
  },

  {
    date: '2022-11-04',
    status: 'declined',
  },
  {
    date: '2022-11-05',
    status: 'approved',
  },

  {
    date: '2022-10-01',
    status: 'declined',
  },
  {
    date: '2022-10-02',
    status: 'under_review',
  },
];
