import React from 'react';
import Search from '../../components/search/search';
import { Table } from '../../ui/table/Table';

//import { Alert } from '../../stories/alert/alert.stories';

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

const ReportsPage = () => {

  return (
	<>
	<section className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__title}>Отчеты участников</h2>
        <Search />
      </div>
    </section>
	</>
    
  );
};

export default ReportsPage;
