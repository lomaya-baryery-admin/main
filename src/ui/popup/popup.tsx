import React from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import styles from './popup.module.css';
import { CloseIcon } from '../icons';
import { Overlay } from './overlay';

interface IPopupProps {
  title: string;
  children?: JSX.Element;
  closePopup: () => void;
  externalClassName?: string;
}

export const Popup = React.forwardRef<HTMLDivElement, IPopupProps>(({ 
                        title, 
                        children, 
                        closePopup, 
                        externalClassName
                      }, ref) => {
  
  // находим DOM-узел для размещения попапа
  const modalRoot = document.getElementById('modal-root');

  // разметка попапа
  const popup = (
    <Overlay closePopup={closePopup} ref={ref}>
      <div className={classNames(externalClassName, styles.popup)}>
        <div className={styles.container}>
          <h1 
            className={
                        `text_type_main-medium 
                        text_color_primary 
                        ${styles.title}`
                      }
          >
            {title}
          </h1>
          <CloseIcon
            onClick={closePopup}
            size="24"
            type='interface-grey'
            className={styles.closeIconExternalClass}
          />
        </div>
        {children}
      </div>
    </Overlay>
  );

  return modalRoot && createPortal(
    popup,
    modalRoot
)});
