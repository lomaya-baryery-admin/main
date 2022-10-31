import { useMemo } from 'react';
import * as appIcons from '../icons';
import { IIconProps } from '../icons/utils';
import styles from './status-label.module.css';

interface IStatusLabelProps {
  statusText: string;
  type: 'current' | 'new' | 'past' | 'approved' | 'rejected' | 'review';
  className?: string;
  icon?: keyof appIcons.TStatusIcons;
}

export const StatusLabel = ({ type, icon, statusText, className }: IStatusLabelProps) => {
  const HTMLClass = className ? className : '';

  let typeStyle;

  switch (type) {
    case 'current':
      typeStyle = styles.status_type_current;
      break;
    case 'new':
      typeStyle = styles.status_type_new;
      break;
    case 'past':
      typeStyle = styles.status_type_past;
      break;
    case 'approved':
      typeStyle = styles.status_type_current;
      break;
    case 'review':
      typeStyle = styles.status_type_review;
      break;
    case 'rejected':
      typeStyle = styles.status_type_rejected;
      break;
  }

  const iconToRender = useMemo(() => {
    if (!icon) {
      return null;
    }

    const Icon = appIcons[icon];

    const iconType: IIconProps['type'] =
      type === 'approved' ? 'success' : type === 'review' ? 'pending' : 'error';

    return (
      <span className={styles.status__icon}>
        <Icon size={'18'} type={iconType} />
      </span>
    );
  }, [icon]);

  return (
    <p className={`${styles.status} ${typeStyle} ${HTMLClass} text text_type_main-small `}>
      {iconToRender}
      {statusText}
    </p>
    // <div className={styles.status}>
    //   {statusTitle === 'current' && <p className={styles.statusCurrent}>Текущая</p>}
    //   {statusTitle === 'new' && <p className={styles.statusNew}>Новая</p>}
    //   {statusTitle === 'past' && <p className={styles.statusPast}>Прошедшая</p>}
    // </div>
  );
};
