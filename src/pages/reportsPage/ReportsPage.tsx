import React, { FC } from 'react';
import { SearchInput } from '../../ui/search-Input/search-input';
import { Table } from '../../ui/table/Table';
import styles from './reports.module.css';
import { allReportsColumns, AllReportsData } from '../../utils/tableColumns';
import { Alert } from '../../ui/alert/alert';
// import { useShiftsGetQuery } from '../../redux-store/api-slice/api-slice';

const ReportsPage: FC = () => (
  // if use API
  // const { data: obj, isLoading, isError } = useShiftsGetQuery(shiftData?.id);
  // return (
  <section className={styles.container}>
    <div className={styles.container__header}>
      <h2 className={styles.container__title}>Отчеты участников</h2>
      <SearchInput value="" onChange={() => {}} onClear={() => {}} />
    </div>
    {/* {isLoading ? (
      'Loading...'
    ) : isError ? (
      <div className={styles.text_red}>{isError}</div>
    ) : data ? (
      <Table columnsData={allReportsColumns} defaultData={AllReportsData} rowHeight={80} />
    ) : (
      <Alert title="Отчёты на проверку отсутствуют" />
    )} */}
    {/* тестовые данные для проверки работы таблицы */}
    {AllReportsData.length ? (
      <Table columnsData={allReportsColumns} defaultData={AllReportsData} rowHeight={80} />
    ) : (
      <Alert title="Отчёты на проверку отсутствуют" />
    )}
  </section>
  // )
);

export default ReportsPage;
