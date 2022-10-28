import React, { FC } from 'react';
import styles from './changes.module.css';

interface IChangeProps {
  changeTitle: 'current' | 'new' | 'past';
}

export const Change: FC<IChangeProps> = ({ changeTitle }) => {
  return (
    <div className={styles.changes}>
      {changeTitle === 'current' && <p className={styles.changeCurrent}>Текущая</p>}
      {changeTitle === 'new' && <p className={styles.changeNew}>Новая</p>}
      {changeTitle === 'past' && <p className={styles.changePast}>Прошедшая</p>}
    </div>
  );
};
