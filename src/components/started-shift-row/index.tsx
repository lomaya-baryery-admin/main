import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { CellDate } from '../../ui/table-native/cell-date';
import styles from './styles.module.css';
import { IShiftUser, IShiftUsers } from '../../redux-store/api/models';
import { CellTasksStat, CellText } from '../../ui/table-native';

interface IUserTasksRowProps {
  shiftStart: string;
  shiftFinish: string;
  userData: IShiftUser;
  cellsClassName: string;
}

export const UserTasksRow: React.FC<IUserTasksRowProps> = ({
  userData,
  shiftStart,
  shiftFinish,
  cellsClassName,
}) => {
  const [toggleOpened, setToggleOpened] = useState(false);

  const statistics = useMemo(() => {
    return userData.user_tasks.reduce(
      (acc, curr) => {
        acc[curr.status]++;
        return acc;
      },
      { under_review: 0, approved: 0, declined: 0 }
    );
  }, [userData]);

  return (
    <div
      className={cn(styles.userRow, 'tableContentRow')}
      onClick={() => setToggleOpened((toggle) => !toggle)}
    >
      <div className={cn(styles.userRow__data, cellsClassName)}>
        <CellText type="accent" text={`${userData.name} ${userData.surname}`} />
        <CellText text={userData.city} />
        <CellDate date={userData.date_of_birth} />
        <CellTasksStat data={statistics} />
      </div>
      {toggleOpened ? 'tasksCalendar' : null}
    </div>
  );
};
