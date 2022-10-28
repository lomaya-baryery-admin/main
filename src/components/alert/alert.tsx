import React, { FC } from 'react';
import styles from './alert.module.css';
import '../../assets/styles/common.css';
import '../../assets/fonts/fonts.css';
import { AlertIcon } from '../../stories/icons/alert-icon';


interface AlertProps {
    name?: string,
    className: string
}

export const Alert: FC<AlertProps> = ({ 
    name='Отчёты на проверку отсутствуют',
    className
}) => {
  return (
    <div className={`${className} ${styles.alert_box}`}>
        <div className={styles.link_box}>
          <AlertIcon type="link-active" />
        </div>
        <p className={`${styles.text_wrapper} text_type_main-large`}>{name}</p>
    </div>
  );
};

