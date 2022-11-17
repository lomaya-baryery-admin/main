import React, { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '../../ui/button/button';
import styles from './shift-current.module.css';
import { Table } from '../../ui/table/Table';
import { StatusLabel } from '../../ui/status-label/status-label';
import { Calendar } from '../../ui/calendar/calendar';
import { CalendarTable } from '../calendar-table/calendar-table';
import { dataForCalendarTable } from '../calendar-table/mockData';


export const ShiftCurrent = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const columnsHelper = createColumnHelper();

  const renderSubComponent = () => (
    <CalendarTable
      tableData={dataForCalendarTable}
      withoutExternalBorders
      isShowTitle
      shiftStartDate="2022-09-25"
    />
  );

  return (
    <div className={styles.shift_page}>
      <div className={styles.shift_container}>
        <div className={styles.shift_header}>
          <h1 className="text_type_main-extra-large text">Смена 1</h1>
          <div className={styles.shift_buttons}>
            <Button htmlType="button" onClick={() => {}} size="small" type="secondary">
              Финальное сообщение
            </Button>
            <Button htmlType="button" onClick={() => {}} size="small" type="negative">
              Завершить смену
            </Button>
          </div>
        </div>
        <div className={styles.shift_table_container}>
          <Table
            columnsData={[
              columnsHelper.accessor((row) => row.status, {
                header: 'Статус смены',
                cell: () => (
                  <span className={styles.table_cell}>
                    <StatusLabel statusText="Текущая" type="current" />
                  </span>
                ),
              }),
              columnsHelper.accessor((row) => row.date_start_end, {
                header: 'Дата старта/окончания',
                cell: (info) => (
                  <>
                    <div className={styles.table_cell_date}>
                      {info.getValue()}
                      <Button
                        htmlType="button"
                        onClick={() => setCalendarOpen(true)}
                        size="small"
                        type="secondary"
                        className={styles.table_cell_button}
                      >
                        Изменить
                      </Button>
                    </div>
                    {isCalendarOpen && (
                      <div className={styles.calendar_container}>
                        <Calendar />
                      </div>
                    )}
                  </>
                ),
              }),
              columnsHelper.accessor((row) => row.count_members, {
                header: 'Кол-во участников',
                cell: (info) => <span className={styles.table_cell}>{info.getValue()}</span>,
              }),
            ]}
            defaultData={[
              {
                count_members: 3,
                date_start_end: '00.00.00 - 00.00.00',
                status: 'current',
              },
            ]}
            rowHeight={60}
          />
        </div>
      </div>
      <div className={styles.users_container}>
        <h2 className={styles.users_subtitle}>Участники</h2>
        <div className={styles.users_table_container}>
          <Table
            columnsData={[
              columnsHelper.accessor((row) => row.user_name, {
                header: 'Имя и фамилия',
                cell: (info) => <span className={styles.table_cell_name}>{info.getValue()}</span>,
              }),
              columnsHelper.accessor((row) => row.user_city, {
                header: 'Город',
                cell: (info) => <span className={styles.table_cell}>{info.getValue()}</span>,
              }),
            ]}
            defaultData={[
              {
                user_name: 'Имя и фамилия',
                user_city: 'Название города',
              },
              {
                user_name: 'Имя',
                user_city: 'Название города',
              },
              {
                user_name: 'фамилия',
                user_city: 'Название города',
              },
              
            ]}
            renderSubComponent={renderSubComponent}
            getRowCanExpand= {() => true}
            // initialExpandedRows= {{ '1': true, '2': true }}
            rowHeight={60}
          />
        </div>
        <p>123</p>
      </div>
    </div>
  );
};
