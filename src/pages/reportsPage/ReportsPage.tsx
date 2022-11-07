import React, { FC } from 'react';
import Search from '../../components/search/search';
import { Table } from '../../ui/table/Table';
import styles from './reports.module.css';

// type Props = {};

const r = [
  {
    buttons: ['Принять', 'Отклонить'],
    preview: 'https://i.pinimg.com/474x/09/79/84/097984d23edbf5290d611a270f944fd6.jpg',
    task_date: '00/00/0000',
    task_name: 'Название задания',
    user_name: 'Иванов Иван',
  },
  {
    buttons: ['Принять', 'Отклонить'],
    preview: 'https://i.pinimg.com/474x/09/79/84/097984d23edbf5290d611a270f944fd6.jpg',
    task_date: '00/00/0000',
    task_name: 'Название задания 2',
    user_name: 'Иванов Иван 2',
  },
];

const ReportsPage: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__title}>Отчеты участников</h2>
        <Search />
      </div>
      <Table
        columnsData={[
          {
            header: 'Название задания',
          },
          {
            header: 'Имя и фамилия',
          },
          {
            header: 'Дата и время отправки',
          },
          {
            header: 'Превью',
          },
          {
            header: ' ',
          },
        ]}
        defaultData={r}
        rowHeight={80}
      />
    </section>
  );
};

export default ReportsPage;
