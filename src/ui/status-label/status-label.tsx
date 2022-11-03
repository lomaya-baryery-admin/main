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
  const HTMLClass = className || '';

  const typeStyle = styles[`status_type_${type}`];

  const iconToRender = useMemo(() => {
    if (!icon) {
      return null;
    }

    const Icon = appIcons[icon];

    const getIconType = (type: IStatusLabelProps['type']) => {
      switch (type) {
        case 'approved' || 'current': {
          return 'success';
        }
        case 'review': {
          return 'pending';
        }
        case 'rejected': {
          return 'error';
        }
        case 'new': {
          return 'interface-black';
        }
        default: {
          return 'interface-secondary';
        }
      }
    };

    return (
      <span className={styles.status__icon}>
        <Icon size="18" type={getIconType(type)} />
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
