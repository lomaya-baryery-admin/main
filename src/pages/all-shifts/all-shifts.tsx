import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createColumnHelper } from '@tanstack/table-core';
import { useShiftsAllGetMutation } from '../../redux-store/api-slice/api-slice';
import { Button } from '../../ui/button/button';
import { PlusIcon } from '../../ui/icons';
import { dataForAllShifts } from './mock-data';
import { StatusLabel } from '../../ui/status-label/status-label';
import { statusLable, statusMapLabelType } from '../../utils/constants';
import { Table } from '../../ui/table/Table';
import { Spinner } from '../../ui/spinner/spinner';
import styles from './all-shifts.module.css';

type TAllShiftColumns = {
  id: number;
  title: string;
  started_at: string;
  finished_at: string;
  total_users: number;
  status: 'started' | 'finished' | 'preparing' | 'cancelled';
};

export const AllShiftsPage = () => {
  const navigate = useNavigate();
  const [getShifts, {data: shiftsData, isLoading, isError} ] = useShiftsAllGetMutation();

  console.log(shiftsData);
  

  const handleCreateShiftClick = () => {
    navigate('/shift/new')
  }

  const getShiftsData = async (page: number) => {
    await getShifts(page).unwrap();
  }

  const handleChangePadination = () => {
    getShiftsData(0)
  }

  useEffect(() => {
    getShiftsData(0)

  }, [])

  const shiftColumnsHelper = createColumnHelper<TAllShiftColumns>();

  const shiftColumns = [
    shiftColumnsHelper.accessor((row) => row.id, {
      header: 'Номер смены',
      id: 'id',
      cell: (info) => (
        <a href="/" className="text text_type_main-default spreadsheetLink">
          {info.getValue()}
        </a>
      ),
    }),
    shiftColumnsHelper.accessor((row) => row.title, {
      id: 'title',
      header: 'Название смены',
      cell: (info) => (
        <a href="/" className="text text_type_main-default spreadsheetLink">
          {info.getValue()}
        </a>
      ),
    }),
    shiftColumnsHelper.accessor((row) => row.started_at, {
      id: 'started_at',
      header: 'Дата старта',
      cell: (info) => info.getValue(),
    }),
    shiftColumnsHelper.accessor((row) => row.finished_at, {
      id: 'finished_at',
      header: 'Дата окончания',
      cell: (info) => info.getValue(),
    }),
    shiftColumnsHelper.accessor((row) => row.total_users, {
      id: 'total_users',
      header: 'К-во участников',
      cell: (info) => info.getValue(),
    }),
    shiftColumnsHelper.accessor((row) => row.status, {
      id: 'status',
      header: 'Статус',
      cell: (status) => {
        const value = status.getValue();
        return <StatusLabel statusText={statusLable(value)} type={statusMapLabelType[value]} />;
      },
    }),
  ];

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.pageConteiner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Смены</h1>
          <Button htmlType='button' size='large' onClick={handleCreateShiftClick}>
            <div className={styles.buttonText}>
              <PlusIcon type='interface-white' />
              <p>Создать смену</p>
            </div>

          </Button>
        </div>
        <div className={styles.tableWrapper}>
          <Table defaultData={dataForAllShifts.shifts} columnsData={shiftColumns} rowHeight={60} />
        </div>

        <div className={styles.pageFooter}>Пагинация</div>
      </div>
    </>
  )
}