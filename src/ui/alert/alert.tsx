import { FC } from 'react';
import styles from './alert.module.css';
import { AlertIcon } from '../icons/alert-icon';

interface AlertProps {
  title?: string;
  className?: string;
}

export const Alert: FC<AlertProps> = ({ title, className }) => {
  className = className || '';

  return (
    <div className={`${className} ${styles.alert_box}`}>
      <div className={styles.link_box}>
        <AlertIcon type="link-active" />
      </div>
      <p className={`${styles.text_wrapper} text_type_main-large`}>{title}</p>
    </div>
  );
};
