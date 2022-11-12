import React, { useRef, useEffect, FC, MouseEventHandler } from 'react';
import styles from './overlay.module.css';

interface IOverlay {
  closePopup: () => void;
  children: JSX.Element;
}

export const Overlay = React.forwardRef<HTMLDivElement, IOverlay>(({
                                        closePopup,
                                        children
                                      }, ref) => {

  // закрытие попапа кликом на оверлей
  const clickOverlay: MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.currentTarget) === e.nativeEvent.target)
    closePopup();
  };

  // закрытие попапа нажатием на esc
  const closePopupWithEsc = (e: KeyboardEvent) => {
    if (e.code === 'Escape')
    closePopup();
  };

  //  установка слушателей для вышеописанных обработчиков
  useEffect(() => {
    document.addEventListener('keydown', closePopupWithEsc);
    return () => {document.removeEventListener('keydown', closePopupWithEsc)};
  }, []);

  return (
  <div className={styles.overlay}
       ref={ref}
       onMouseDown={clickOverlay}
  >
    {children}
  </div>
)});