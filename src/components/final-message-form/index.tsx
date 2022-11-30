import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { useAppSelector } from '../../redux-store/hooks';
import { selectRootShifts } from '../../redux-store/root-shifts';
import { Button } from '../../ui/button';
import { useUpdateShiftSettingsMutation } from '../../redux-store/api';
import { Navigate, useLocation } from 'react-router-dom';
import { IAppLocation } from '../../utils';
import { Loader } from '../../ui/loader';

export const FinalMessageForm: React.FC = () => {
  const { state: locationState }: IAppLocation = useLocation();
  const { started } = useAppSelector(selectRootShifts);
  const [saveMessage, { isLoading, isSuccess }] = useUpdateShiftSettingsMutation();

  const [inputValue, changeInputnValue] = useState(started?.final_message);

  useEffect(() => {
    changeInputnValue(started?.final_message);
  }, [started]);

  if (!started) {
    return <Loader extClassName={styles.messageForm__loader} />;
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    saveMessage({ shiftId: started.id, final_message: inputValue });
  };

  if (isSuccess) {
    return <Navigate to={locationState?.background || '/'} replace />;
  }

  return (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
      <textarea
        value={inputValue}
        name="message"
        placeholder="Введите текст"
        className={cn(styles.messageForm__input, 'text border')}
        onChange={(evt) => changeInputnValue(evt.currentTarget.value)}
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
