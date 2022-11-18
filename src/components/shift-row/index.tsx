import React, { useCallback } from 'react';
import cn from 'classnames';
import { CellLink, CellText } from '../../ui/table-native';
import { StatusLabel } from '../../ui/status-label';
import styles from './index.module.css';
import { IShift, IShifts } from '../../redux-store/api/models';
import { getShiftNumber } from './lib';

interface IRowsAllShifts {
  extClassName?: string;
  data: IShifts;
}

export const RowsAllShifts: React.FC<IRowsAllShifts> = ({ extClassName, data }) => {
  const renderStatusLabel = useCallback((status: IShift['status']) => {
    switch (status) {
      case 'preparing':
        return <StatusLabel statusText="Новая" type="new" />;
      case 'started':
        return <StatusLabel statusText="Текущая" type="current" />;
      case 'finished':
        return <StatusLabel statusText="Прошедшая" type="past" />;
      default:
        return null;
    }
  }, []);

  const getRoutePath = useCallback((shift: IShift) => {
    switch (shift.status) {
      case 'preparing':
        return `/shifts/preparing`;
      case 'started':
        return `/shifts/started`;
      case 'finished':
        return `/shifts/finished/${shift.id}`;
      default:
        return '/';
    }
  }, []);
  const test = data.shifts[1].id.match(/\d{4}/g);

  return (
    <>
      {data.shifts.map((shift) => (
        <div key={shift.id} className={cn(styles.row, extClassName, 'tableContentRow')}>
          <CellText text={getShiftNumber(shift.id)} />
          <CellLink text={shift.title} routeTo={getRoutePath(shift)} />
          <CellText text={shift.started_at} />
          <CellText text={shift.finished_at} />
          <CellText text={shift.total_users} />
          {renderStatusLabel(shift.status)}
        </div>
      ))}
    </>
  );
};
