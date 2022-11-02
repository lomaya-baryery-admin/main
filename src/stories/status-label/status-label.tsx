import { useMemo } from 'react';
import * as appIcons from '../icons';
import { IIconProps } from '../icons/utils';
import styles from './status-label.module.css';

interface IStatusLabelProps {
  statusText: string;
  // type: 'current' | 'new' | 'past' | 'approved' | 'rejected' | 'review';
  type: string,
  className?: string;
  icon?: keyof appIcons.TStatusIcons;
}

export const StatusLabel = ({ type, icon, statusText, className }: IStatusLabelProps) => {
  const HTMLClass = className ? className : '';

  const typeStyle = styles[`status_type_${type}`];

  const iconToRender = useMemo(() => {
    if (!icon) {
      return null;
    }

    const Icon = appIcons[icon];

    const iconType: IIconProps['type'] =
      type === 'approved' || type === 'current'
        ? 'success'
        : type === 'review'
        ? 'pending'
        : type === 'rejected'
        ? 'error'
        : type === 'new'
        ? 'interface-black'
        : 'interface-secondary';

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
  );
};
