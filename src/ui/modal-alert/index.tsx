import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { Alert } from '../alert';
import { Button } from '../button';

const modalRoot = document.getElementById('modalRoot') as HTMLElement;

interface IModalAlertProps {
  closeModal: () => void;
  closeShift: () => void;
}

export const ModalAlert: React.FC<IModalAlertProps> = ({ closeModal, closeShift }) => {
  const handleCancel = () => {
    closeModal();
  };

  const handleFinish = () => {
    closeShift();
    closeModal();
  };

  const handleEscPress = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      handleCancel();
    }
  };

  const clickOnOverlay = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (evt.currentTarget == evt.target) {
      handleCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscPress);

    return () => {
      document.removeEventListener('keyup', handleEscPress);
    };
  }, []);

  return createPortal(
    <div className={styles.overlay} onMouseDown={clickOnOverlay}>
      <div className={styles.modalAlert}>
        <Alert
          title={'Вы уверены, что хотите завершить смену?'}
          extClassName={styles.modalAlert__alert}
        />
        <div className={styles.modalAlert__controls}>
          <Button htmlType="button" size="small" type="primary" onClick={handleCancel}>
            Отменить
          </Button>
          <Button htmlType="button" size="small" type="negative" onClick={handleFinish}>
            Завершить
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
