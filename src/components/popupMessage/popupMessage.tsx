import React, { useRef } from 'react';
import styles from './popupMessage.module.css';
import { Popup } from '../../ui/popup/popup';
import { Button } from '../../ui/button/button';

interface IPopupMessageProps {
  closePopup: () => void;
}

export const PopupMessage = React.forwardRef<HTMLDivElement, IPopupMessageProps>(
  ({ closePopup }, ref) => {

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
      closePopup={closePopup}
      ref={ref}
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
            htmlType="submit"
            size="small"
            type="primary"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </Popup>
  )
});