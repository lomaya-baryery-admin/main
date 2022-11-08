import React from 'react';
import styles from './reports.module.css';

// interface IReports {
//  title: string;
//  name: string;
//  surname: string;
// }

export const Reports = () => {
  return (
    <>
      <div className={styles.participantReports}>
        <div className={styles.participantReports__header}>
          <h2 className={styles.participantReports__title}>Отчеты участников</h2>
          {/* Инпут для поиска  */}
          <input type="text" />
        </div>
        {/* Вставить таблицу с полями title/name/surname/task_date/photo_url/status */}
        <div className={styles.participantReports__table}>
          <div className={styles.participantReports__tableHeader}>
            <p className={styles.participantReports__text1}>Название задания</p>
            <p className={styles.participantReports__text1}>Имя и фамилия</p>
            <p className={styles.participantReports__text1}>Дата и время отправки</p>
            <p className={styles.participantReports__text1}>Превью</p>
            <p className={styles.participantReports__text1}>.</p>
          </div>
          <div className={styles.participantReports__row}>
            <p className={styles.participantReports__text2}>Название задания</p>
            <p className={styles.participantReports__text2}>Имя Фамилия</p>
            <p className={styles.participantReports__text3}>00.00.0000 в 00.00</p>
            <div className={styles.participantReports__image}>
              <img
                className={styles.participantReports__img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaOpOGyiS-byWXEOsEwiKha8aA0lmeG1Aua-f_NZ-&s"
                alt=""
              />
            </div>
            <div className={styles.participantReports__buttons}>
              <button>1</button>
              <button>2</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
