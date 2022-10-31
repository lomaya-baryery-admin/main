import React, { FC } from 'react';
import { CircleCheckIcon } from '../icons';
import { CircleStop } from '../icons/circle-stop-icon.stories';
import { CircleWarning } from '../icons/circle-warning-icon.stories';
import styles from './labels.module.css';

interface ILabelStatusProps {
  labelStatusTitle: 'approved' | 'rejected' | 'review';
}

export const LabelStatus: FC<ILabelStatusProps> = ({ labelStatusTitle }) => {
  return (
    <div className={styles.labels}>
      {labelStatusTitle === 'approved' && (
        <p className={styles.labelApproved}>
          <CircleCheckIcon type="success" />
          Участник одобрен
        </p>
      )}
      {labelStatusTitle === 'rejected' && (
        <p className={styles.labelRejected}>
          <CircleStop type="error" data-tip="Отклонен" />
          Участник отклонён
        </p>
      )}
      {labelStatusTitle === 'review' && (
        <p className={styles.labelWarning}>
          <CircleWarning type="pending" data-tip="На рассмотрении" />
          Участник на рассмотрении
        </p>
      )}
      <ReactTooltip />
    </div>
  );
};
