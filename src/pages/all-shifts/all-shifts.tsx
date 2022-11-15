import React, { useEffect, useMemo, useState } from 'react';
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
import { CreateShiftModal } from '../../components/create-shift-modal/create-shift-modal';
import { Pagination } from '../../ui/pagination/pagination';
import { IShiftData, TTaskStatus } from '../../redux-store/api-slice/types';
import styles from './all-shifts.module.css';

export const AllShiftsPage = () => {
  const [getShifts, { data: shiftsData, isLoading }] = useShiftsAllGetMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const tableData = useMemo((): Array<IShiftData> | undefined => shiftsData?.shifts, [shiftsData]);
  const shiftColumnsHelper = createColumnHelper<IShiftData>();

  const handleCreateShiftClick = (): void => {
    setIsModalOpen(true);
  };

  const getShiftsData = async (page: number): Promise<void> => {
    try {
      await getShifts(page).unwrap();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangePadination = (page: number): void => {
    getShiftsData(page);
  };

  useEffect(() => {
    getShiftsData(1);
  }, []);

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const getRedirectUrl = (taskStatus: TTaskStatus): string => {
    if (taskStatus === 'started') {
      return '/shift/current';
    }
    if (taskStatus === 'preparing') {
      return '/shift/new';
    }
    return '';
  };

  const shiftColumns = useMemo(
    () => [
      shiftColumnsHelper.accessor((row) => row.id, {
        header: 'Номер смены',
        id: 'id',
        cell: (info) => {
          const currentStatus = info?.cell?.row?.original?.status;
          const link = getRedirectUrl(currentStatus);
          return (
            <a href={link} className="text text_type_main-default spreadsheetLink">
              {info.getValue()}
            </a>
          );
        },
      }),
      shiftColumnsHelper.accessor((row) => row.title, {
        id: 'title',
        header: 'Название смены',
        cell: (info) => {
          const currentStatus = info?.cell?.row?.original?.status;
          const link = getRedirectUrl(currentStatus);
          return (
            <a href={link} className="text text_type_main-default spreadsheetLink">
              {info.getValue()}
            </a>
          );
        },
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
    ],
    [shiftColumnsHelper]
  );

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.pageConteiner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Смены</h1>
          <Button htmlType="button" size="large" onClick={handleCreateShiftClick}>
            <div className={styles.buttonText}>
              <PlusIcon type="interface-white" />
              <p>Создать смену</p>
            </div>
          </Button>
        </div>
        <div className={styles.tableWrapper}>
          <Table
            defaultData={tableData || dataForAllShifts.shifts}
            columnsData={shiftColumns}
            rowHeight={60}
          />
        </div>

        <div className={styles.pageFooter}>
          <Pagination
            currentPageNum={shiftsData?.page || 1}
            totalPage={shiftsData?.total_page || 1}
            onPageChange={handleChangePadination}
          />
        </div>
      </div>
      {isModalOpen && <CreateShiftModal handleCloseModal={handleCloseModal} />}
    </>
  );
};
