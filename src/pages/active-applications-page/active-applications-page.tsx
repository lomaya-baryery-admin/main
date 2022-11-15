import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

import styles from './active-applications-page.module.css';

import {
  useApplicationPutchApproveMutation,
  useApplicationPutchDeclineMutation,
  useFetchApplicationsQuery,
} from '../../redux-store/api-slice/api-slice';
import { Button } from '../../ui/button/button';
import { SearchInput } from '../../ui/search-Input/search-input';
import { Table } from '../../ui/table/Table';
import { tmpData } from './tmp';

// TApplicationsTable, applicationsData, applicationsColumnsHelper, applicationsColumns
// Это переменные, отвечающие за работу таблицы с нашими данными. По идее, такое должны написать чуваки,
// которые пишут таблицу. Но они пока этого не сделали и, видимо, не будут

// Структура данных таблицы (by lizonkisel)
type TApplicationsTable = {
  user_name: string;
  city: string;
  phone: string;
  date_of_birth: string;
  buttons: string[];
};

export function ActiveApplicationsPage() {
  const { data: responceData, isSuccess } = useFetchApplicationsQuery(''); // -> передается shiftId, но бэк болеет

  const [approveReq, { data: approveData }] = useApplicationPutchApproveMutation();
  const [declineReq, { data: declineData }] = useApplicationPutchDeclineMutation();

  const pendingData = isSuccess ? responceData : tmpData;

  const dataForTable: TApplicationsTable[] = [];

  // Функция, которая преобразует данные бэкенда в данные для таблицы
  function makeDataForTable() {
    pendingData.forEach((user) => {
      const userForTable = {
        user_name: `${user.name} ${user.surname}`,
        city: user.city,
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        buttons: ['Принять', 'Отклонить'],
      };
      dataForTable.push(userForTable);
    });
  }

  makeDataForTable();

  async function customDispatch(button: any) {
    const buttonType = button.type;
    if (buttonType === 'submit') {
      await approveReq('').unwrap(); // -> передается requestId, но бэк болеет
    }
    if (buttonType === 'reset') {
      await declineReq('').unwrap(); // -> передается requestId, но бэк болеет
    }
  }

  // Вспомогательная функция из либы @tanstack/react-table (by lizonkisel)
  const applicationsColumnsHelper = createColumnHelper<TApplicationsTable>();

  // Описание структуры и внешнего вида таблицы (описание колонок) (by lizonkisel)
  const applicationsColumns = [
    applicationsColumnsHelper.accessor((row) => row.user_name, {
      header: 'Имя и фамилия',
      cell: (info) => (
        <a href="/" className="text text_type_main-default spreadsheetLink">
          {info.getValue()}
        </a>
      ),
    }),
    applicationsColumnsHelper.accessor((row) => row.city, {
      header: 'Город',
      cell: (info) => info.getValue(),
    }),
    applicationsColumnsHelper.accessor((row) => row.phone, {
      header: 'Телефон',
      cell: (info) => info.getValue(),
    }),
    applicationsColumnsHelper.accessor((row) => row.date_of_birth, {
      header: 'Дата рождения',
      cell: (info) => info.getValue(),
    }),
    applicationsColumnsHelper.accessor((row) => row.buttons, {
      header: ' ',
      // Внутри cell код, вероятнее всего, нужно будет переписывать после подключения store.
      // Для этого потребуются эксперименты с готовым store-ом
      cell: (buttons) => (
        <div className={styles.buttonContainer}>
          {buttons.getValue().map((button) => {
            const buttonType = button === 'Принять' ? 'submit' : 'reset';
            return (
              <Button
                htmlType={buttonType}
                onClick={(e: React.SyntheticEvent): void => {
                  customDispatch(e.target);
                }}
                size="small"
                type="primary"
              >
                {button}
              </Button>
            );
          })}
        </div>
      ),
    }),
  ];

  return (
    <article className={styles.main}>
      <section className={styles.header_content}>
        <h1 className={`${styles.header} text_type_main-extra-large`}>Заявки на участие</h1>
        <SearchInput value="" onChange={() => {}} onClear={() => {}} />
      </section>
      <section className={styles.main_content}>
        <Table
          defaultData={dataForTable}
          columnsData={applicationsColumns}
          rowHeight={60}
          getRowCanExpand={() => false}
        />
      </section>
      <section className={styles.footer_content} />
    </article>
  );
}
