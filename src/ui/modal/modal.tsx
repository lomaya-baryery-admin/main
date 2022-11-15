import React from 'react';
import { CloseIcon } from '../icons';
import { Button } from '../button/button';
import styles from './modal.module.css';

interface Props {
  title: string;
  buttonText: string;
  children: React.ReactNode;
  handleCloseModal: () => void;
  isBtnDisable?: boolean;
  handleButtonClick: () => void;
}

export const Modal: React.FC<Props> = ({
  title,
  buttonText,
  children,
  handleCloseModal,
  isBtnDisable,
  handleButtonClick,
}) => (
  <div className={styles.modalWrapper}>
    <div className={styles.modalHeader}>
      <span className={styles.title}>{title}</span>
      <div className={styles.closeIcon}>
        <CloseIcon type="interface-secondary" onClick={handleCloseModal} />
      </div>
    </div>
    <div className={styles.modalContent}>{children}</div>
    <div className={styles.modalFooter}>
      <Button htmlType="button" size="small" disabled={isBtnDisable} onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </div>
  </div>
);
