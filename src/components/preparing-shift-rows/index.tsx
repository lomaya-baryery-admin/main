import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { IShiftUser } from '../../redux-store/api/models';
import { CellText } from '../../ui/table-native';
import { CellDate } from '../../ui/table-native';

interface IPreparingShiftRowsProps {
  extClassName?: string;
  data: IShiftUser[];
}

export const PreparingShiftRows: React.FC<IPreparingShiftRowsProps> = ({ extClassName, data }) => {
  return (
    <>
      {data.map((participant) => (
        <div key={participant.user_id} className={cn(styles.row, extClassName, 'tableContentRow')}>
          <CellText type="accent" text={`${participant.name} ${participant.surname}`} />
          <CellText text={participant.city} />
          <CellText text={participant.phone} />
          <CellDate date={participant.date_of_birth} />
        </div>
      ))}
    </>
  );
};
