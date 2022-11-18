import { createColumnHelper } from '@tanstack/react-table';

import styles from './reviewed-applications-page.module.css';

import { applicationLabel } from '../../utils/constants';

import { useFetchApplicationsQuery } from '../../redux-store/api-slice/api-slice';
import { SearchInput } from '../../ui/search-Input/search-input';
import { StatusLabel } from '../../ui/status-label/status-label';
import { Table } from '../../ui/table/Table';
import { tmpData } from './tmp';

import { IApplicationsResponce } from '../../redux-store/api-slice/types';
import { IFilteredApplicationsResponce } from './tmp';

// TApplicationsTable, applicationsData, applicationsColumnsHelper, applicationsColumns
// Это переменные, отвечающие за работу таблицы с нашими данными. По идее, такое должны написать коллеги,
// которые пишут таблицу. Но они пока этого не сделали и, видимо, не будут

// Структура данных таблицы (by lizonkisel)
type TApplicationsTable = {
  user_name: string;
  city: string;
  phone: string;
  date_of_birth: string;
  status: 'approved' | 'declined';
};

export function ReviewedApplicationsPage() {
  const { data: responceData, isSuccess } = useFetchApplicationsQuery(''); //

  function filterResponseData(
    responceData: IApplicationsResponce[]
  ): IFilteredApplicationsResponce[] {
    const filteredResponseData = JSON.parse(
      JSON.stringify(responceData.filter((user) => user.status !== 'pending'))
    );
    return filteredResponseData;
  }

  const checkedData = isSuccess ? filterResponseData(responceData) : tmpData;

  const dataForTable: TApplicationsTable[] = [];

  // Функция, которая преобразует данные бэкенда в данные для таблицы
  function makeDataForTable() {
    checkedData.forEach((user) => {
      const userForTable = {
        user_name: `${user.name} ${user.surname}`,
        city: user.city,
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        status: user.status,
      };
      dataForTable.push(userForTable);
    });
  }

  makeDataForTable();

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
    applicationsColumnsHelper.accessor((row) => row.status, {
      header: ' ',
      // Внутри cell код, вероятнее всего, нужно будет переписывать после подключения store.
      // Для этого потребуются эксперименты с готовым store-ом
      cell: (status) => {
        const value = status.getValue();
        let typeValue: 'approved' | 'rejected';
        if (value === 'declined') {
          typeValue = 'rejected';
        } else {
          typeValue = value;
        }
        const icon = value === 'approved' ? 'CircleCheckIcon' : 'CircleStopIcon';
        return <StatusLabel statusText={applicationLabel(value)} type={typeValue} icon={icon} />;
      },
    }),
  ];

  return (
    <article className={styles.main}>
      <section className={styles.header_content}>
        <h1 className="text_type_main-extra-large">Заявки на участие</h1>
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
      <section className={styles.footer_content}>Footer</section>
    </article>
  );
}
