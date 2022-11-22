import React, { useCallback } from 'react';
import cn from 'classnames';
import { CellLink, CellText } from '../../ui/table-native';
import { StatusLabel } from '../../ui/status-label';
import styles from './index.module.css';
import { IShift } from '../../redux-store/api/models';
import { getShiftNumber } from './lib';
import { CellDate } from '../../ui/table-native/cell-date';

interface IShiftsRow {
  extClassName?: string;
  shiftData: IShift;
}

export const ShiftsRow: React.FC<IShiftsRow> = ({ extClassName, shiftData }) => {
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

  return (
    <div className={cn(styles.row, extClassName, 'tableContentRow')}>
      <CellText text={getShiftNumber(shiftData.id)} />
      <CellLink text={shiftData.title} routeTo={getRoutePath(shiftData)} />
      <CellDate date={shiftData.started_at} />
      <CellDate date={shiftData.finished_at} />
      <CellText text={shiftData.total_users} />
      {renderStatusLabel(shiftData.status)}
    </div>
  );
};
