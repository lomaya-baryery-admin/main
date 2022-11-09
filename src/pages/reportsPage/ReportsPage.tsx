import React, { FC } from 'react';
import { SearchInput } from '../../ui/search-Input/search-input';
import { Table } from '../../ui/table/Table';
import styles from './reports.module.css';
import { allReportsColumns, AllReportsData } from '../../utils/tableColumns';

const ReportsPage: FC = () => (
  <section className={styles.container}>
    <div className={styles.container__header}>
      <h2 className={styles.container__title}>Отчеты участников</h2>
      <SearchInput value="" onChange={() => {}} onClear={() => {}} />
    </div>
    <Table columnsData={allReportsColumns} defaultData={AllReportsData} rowHeight={80} />
  </section>
);

export default ReportsPage;
