import React, { useEffect, useRef } from 'react';
import styles from './popup.module.css';
import { CloseIcon } from '../icons';

interface IPopupProps {
  title: string;
  children?: JSX.Element;
  isPopapOpen: boolean;
  closePopup: () => void;
  externalClassName?: string;
}

export const Popup = ({ 
                        title, 
                        children, 
                        isPopapOpen, 
                        closePopup, 
                        externalClassName
                      }: IPopupProps) => {
  
  // закрытие попапа кликом на оверлей
  const overlayRef = useRef<null | HTMLDivElement>(null);
  const clickOverlay = (e: MouseEvent) => {
    if (e.currentTarget === e.target) 
    closePopup();
  };

  // закрытие попапа нажатием на esc
  const closePopupWithEsc = (e: KeyboardEvent) => {
    if (e.code === 'Escape')
    closePopup();
  };

  //  установка слушателей для вышеопсанных обработчиков
  useEffect(() => {
    document.addEventListener('keydown', closePopupWithEsc);
    if (overlayRef.current) overlayRef.current.addEventListener('click', clickOverlay);
    return () => {document.removeEventListener('keydown', closePopupWithEsc)};
  }, []);

  // определение содержания переменной для внешних стилей
  const externalPopupClass = externalClassName || '';

  return(
    <div className={
                    isPopapOpen ? 
                    `${styles.overlay}` : 
                    `${styles.overlay} ${styles.popup_visibility_false}`}
         ref={overlayRef}
    >
      <div className={`${externalPopupClass} ${styles.popup}`}>
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
          />
        </div>
        {children}
      </div>
    </div>
  )
};
