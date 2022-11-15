export const dataForAllShifts = {
  page: 1,
  total_page: 10,
  shifts: [
    {
      id: '01',
      status: 'started',
      started_at: '2022-10-15',
      finished_at: '2022-11-15',
      total_users: 10,
      title: 'Название смены 1',
    },

    {
      id: '02',
      status: 'finished',
      started_at: '2022-10-16',
      finished_at: '2022-11-16',
      total_users: 5,
      title: 'Название смены 2',
    },

    {
      id: '03',
      status: 'preparing',
      started_at: '2022-10-17',
      finished_at: '2022-11-17',
      total_users: 8,
      title: 'Название смены 3',
    },

    {
      id: '04',
      status: 'cancelled',
      started_at: '2022-10-18',
      finished_at: '2022-11-18',
      total_users: 8,
      title: 'Название смены 4',
    },
  ],
};
