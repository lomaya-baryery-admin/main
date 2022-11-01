import React from 'react';
import Search from '../../components/search/search';
//import Table from '../components/Table/Table';

import { Alert } from '../../stories/alert/alert';

import styles from './reports.module.css';

type Props = {};

const ReportsPage = (props: Props) => {
	const {wsReports} = (store => store.user_tasks)

  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__title}>Отчеты участников</h2>
        <Search />
      </div>

      <div className={styles.container__main}>
				{!wsReports && <Alert title="Отчёты на проверку отсутствуют" />}
        {wsReports &&
				<table className={styles.container__table}>
				<tr>
					<th>Название задания</th>
					<th>Имя и фамилия</th>
					<th>Дата и время отправки</th>
					<th>Превью</th>
					<th></th>
				</tr>
			</table>
				}

        
      </div>

			<div className={styles.container__footer}>
				{/* количество отчетов и пагинация */}
			</div>
    </section>
  );
};

export default ReportsPage;

//Страница с отчетами участников
//если отчетов нет, показать заглушку Alert
//если отчеты есть, показать таблицу
// switch route?
