import React, { FormEventHandler, useMemo, useState } from 'react';
import { InputText } from '../../ui/inputText';
import cn from 'classnames';
import styles from './styles.module.css';
import { DateRange } from '../../ui/date-range';
import { useAppSelector } from '../../redux-store/hooks';
import { selectRootShifts } from '../../redux-store/root-shifts';
import { Button } from '../../ui/button';
import {
  getTitle,
  getDiffInDays,
  getFinishDate,
  getStartDate,
  validateLength,
  formatDate,
} from './lib';
import { useCreateNewShiftMutation, useUpdateShiftSettingsMutation } from '../../redux-store/api';
import { Navigate, useLocation } from 'react-router-dom';
import { IAppLocation } from '../../utils';

export interface IShiftSettingsFormProps {
  shiftStatus: 'creating' | 'started' | 'preparing';
  extClassName?: string;
}

export const ShiftSettingsForm: React.FC<IShiftSettingsFormProps> = ({
  shiftStatus,
  extClassName,
}) => {
  const { state: locationState }: IAppLocation = useLocation();

  const { started, preparing } = useAppSelector(selectRootShifts);

  const [
    createShift,
    { isError: isCreateError, isLoading: isCreateLoading, isSuccess: isCreateSuccess },
  ] = useCreateNewShiftMutation();

  const [
    updateShift,
    { isError: isUpdateError, isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateShiftSettingsMutation();

  const initShifTitle = useMemo(
    () => getTitle(shiftStatus, { started, preparing }),
    [started, preparing]
  );
  const [titleFieldValue, seTitleFieldValue] = useState(initShifTitle);
  const [toggleTextFieldError, setToggleTextFieldError] = useState(false);
  const validateTitle = (titleFieldValue: string) => validateLength(titleFieldValue, 3, 60);

  const formDateLogicProps = {
    formType: shiftStatus,
    startedStartAt: started?.started_at,
    startedFinishAt: started?.finished_at,
    preparingStartAt: preparing?.started_at,
    preparingFinishAt: preparing?.finished_at,
  };

  const initStartDate = useMemo(() => getStartDate(formDateLogicProps), [started]);
  const initFinishDate = useMemo(() => getFinishDate(formDateLogicProps), [started]);
  const [startFieldValue, setStartFieldValue] = useState(initStartDate);
  const [finishFieldValue, setfinishFieldValue] = useState(initFinishDate);

  const filterStartDate = useMemo(() => {
    if (shiftStatus === 'preparing') {
      if (started) {
        return new Date(started.finished_at);
      } else {
        return new Date(new Date().setHours(24, 0, 0, 0));
      }
    } else {
      return initStartDate;
    }
  }, [started, initStartDate]);

  const filterFinishDate = useMemo(() => {
    if (shiftStatus === 'started') {
      return new Date(new Date().setHours(24, 0, 0, 0));
    } else {
      return undefined;
    }
  }, [shiftStatus]);

  const dayCount = useMemo(
    () => getDiffInDays(finishFieldValue, startFieldValue),
    [startFieldValue, finishFieldValue]
  );

  const handleChangeTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (toggleTextFieldError) {
      setToggleTextFieldError(false);
    }
    seTitleFieldValue(evt.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const shiftSettings = {
      title: titleFieldValue.trim(),
      started_at: formatDate(startFieldValue),
      finished_at: formatDate(finishFieldValue),
    };

    if (validateTitle(titleFieldValue)) {
      if (shiftStatus === 'creating') {
        createShift(shiftSettings);
      } else {
        const { id, final_message } = shiftStatus === 'preparing' ? preparing! : started!;

        updateShift({
          shiftId: id,
          final_message,
          ...shiftSettings,
        });
      }
    } else {
      handleValidateTitle();
    }
  };

  const handleValidateTitle = () => {
    setToggleTextFieldError(!validateTitle(titleFieldValue));
  };

  if (isCreateSuccess || isUpdateSuccess) {
    return <Navigate to={locationState?.background || '/'} replace />;
  }

  return (
    <form className={cn(styles.shiftForm, extClassName)} onSubmit={handleSubmit}>
      <div className={styles.shiftForm__field}>
        <label
          htmlFor="title"
          className={cn(
            styles.shiftForm__label,
            'text',
            'text_type_main-default',
            'text_color_secondary'
          )}
        >
          Название
        </label>
        <InputText
          onBlur={handleValidateTitle}
          id="title"
          name="title"
          extClassName={styles.shiftForm__inputText}
          value={titleFieldValue}
          onChange={handleChangeTitle}
          error={toggleTextFieldError}
          errorText={'От 3 до 60 символов'}
        />
      </div>
      <div className={styles.shiftForm__field}>
        <label
          className={cn(
            styles.shiftForm__label,
            'text',
            'text_type_main-default',
            'text_color_secondary'
          )}
        >
          Дата
        </label>
        <DateRange
          startValue={startFieldValue}
          finishValue={finishFieldValue}
          changeStartDate={setStartFieldValue}
          changeFinishDate={setfinishFieldValue}
          filterStart={filterStartDate}
          filterFinish={filterFinishDate}
          disabledStart={shiftStatus === 'started'}
        />
      </div>
      <div className={styles.shiftForm__field}>
        <label
          className={cn(
            styles.shiftForm__label,
            'text',
            'text_type_main-default',
            'text_color_secondary'
          )}
        >
          Выбрано дней
        </label>
        <div className={cn(styles.shiftForm__counter, 'text')}>{dayCount}</div>
      </div>
      <Button
        htmlType="submit"
        size="small"
        disabled={isCreateLoading || isUpdateLoading}
        loading={isCreateLoading || isUpdateLoading}
        extClassName={styles.shiftForm__button}
      >
        {shiftStatus === 'creating' ? 'Создать' : 'Сохранить'}
      </Button>
    </form>
  );
};
