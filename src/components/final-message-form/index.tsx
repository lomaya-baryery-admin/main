import React, { useState } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../redux-store/hooks';
import { selectRootShifts } from '../../redux-store/root-shifts';
import { Button } from '../../ui/button';
import { useUpdateShiftSettingsMutation } from '../../redux-store/api';
import { Navigate, useLocation } from 'react-router-dom';
import { IAppLocation } from '../../utils';
import styles from './styles.module.css';

export const FinalMessageForm: React.FC = () => {
  const { state: locationState }: IAppLocation = useLocation();
  const { started } = useAppSelector(selectRootShifts);

  const [saveMessage, { isLoading, isSuccess }] = useUpdateShiftSettingsMutation();

  const [inputValue, changeInputValue] = useState(started?.final_message || '');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (started) {
      const { id, title, started_at, finished_at } = started;

      saveMessage({ shiftId: id, title, started_at, finished_at, final_message: inputValue });
    }
  };

  if (isSuccess || !started) {
    return <Navigate to={locationState?.background || '/'} replace />;
  }

  return (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
      <textarea
        value={inputValue}
        name="message"
        placeholder="Введите текст"
        className={cn(styles.messageForm__input, 'text border')}
        onChange={(evt) => changeInputValue(evt.currentTarget.value)}
        spellCheck={'false'}
      ></textarea>
      <Button
        size="small"
        htmlType="submit"
        extClassName={cn(styles.messageForm__button)}
        loading={isLoading}
        disabled={isLoading}
      >
        Сохранить
      </Button>
    </form>
  );
};
