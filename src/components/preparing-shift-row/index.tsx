import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { IShiftUser } from '../../redux-store/api/models';
import { CellText } from '../../ui/table-native';
import { CellDate } from '../../ui/table-native';

interface IPreparingShiftRowProps {
  extClassName?: string;
  userData: IShiftUser;
}

export const PreparingShiftRow: React.FC<IPreparingShiftRowProps> = ({
  extClassName,
  userData,
}) => (
  <div className={cn(styles.row, extClassName, 'tableContentRow')}>
    <CellText type="accent" text={`${userData.name} ${userData.surname}`} />
    <CellText text={userData.city} />
    <CellText text={userData.phone} />
    <CellDate date={userData.date_of_birth} />
  </div>
);
