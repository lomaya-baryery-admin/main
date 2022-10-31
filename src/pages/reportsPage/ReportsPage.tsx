import React from 'react';
import Search from '../../components/search/search';
//import Table from '../components/Table/Table';

import styles from './reports.module.css';

type Props = {};

const ReportsPage = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__title}>Отчеты участников</h2>
        <Search />
      </div>
      <table className={styles.container__table}>
        <tr>
          <th>Название задания</th>
          <th>Имя и фамилия</th>
          <th>Дата и время отправки</th>
          <th>Превью</th>
          <th></th>
        </tr>
      </table>
      {/* Table */}
    </section>
  );
};

export default ReportsPage;
