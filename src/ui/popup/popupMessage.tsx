import React, { useRef } from 'react';
import styles from './popupMessage.module.css';
import { Popup } from './popup';
import { Button } from '../button/button';

interface IPopupMessageProps {
  isPopapOpen: boolean;
  closePopup: () => void;
}

export const PopupMessage = ({isPopapOpen, closePopup}: IPopupMessageProps) => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  // закрытие попапа с очищением textarea
  const closeWithResert = () => {
    closePopup();
    setTimeout(() => {
      if (textareaRef.current) textareaRef.current.value = '';
    }, 500)
  };

  // отправка сообщения из попапа
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const message = textareaRef.current && textareaRef.current.value;
    // запрос на отправку формы (пока недостаточно данных, чтобы его прописать)
    closeWithResert();
  }

  return (
    <Popup 
      title='Добавить сообщение' 
      isPopapOpen={isPopapOpen} 
      closePopup={closePopup}
    >
      <form 
        name='message'
        onSubmit={sendMessage}
        className={styles.form}
      >
        <textarea 
          name="text" 
          autoComplete='off'
          ref={textareaRef}
          placeholder='Введите сообщение'
          className={`text_type_main-default text_color_primary ${styles.textarea}`}
        />
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            onClick={closeWithResert}
            size="small"
            type="secondary"
          >
            Отменить
          </Button>
          <Button
            htmlType="submit" // пока не работает, надо изменять в элементе Button
            size="small"
            type="primary"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </Popup>
  )
};