import React, { useCallback } from 'react';
import cn from 'classnames';
import { CellLink, CellText } from '../../ui/table-native';
import { StatusLabel } from '../../ui/status-label';
import styles from './index.module.css';

interface IShift {
  id: string;
  status: 'started' | 'finished' | 'preparing';
  title: string;
  final_message: string;
  started_at: string;
  finished_at: string;
  total_users: number;
}

interface IRowsAllShifts {
  extClassName?: string;
  data: IShift[];
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
        return `/shifts/preparing/${shift.id}`;
      case 'started':
        return `/shifts/started/${shift.id}`;
      case 'finished':
        return `/shifts/finished/${shift.id}`;
      default:
        return '/';
    }
  }, []);

  return (
    <>
      {data.map((shift) => (
        <div key={shift.id} className={cn(styles.row, extClassName, 'tableContentRow')}>
          <CellText text={shift.id} />
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
