import React, { FormEventHandler, useMemo, useRef, useState } from 'react';
import { InputText } from '../../ui/inputText';
import cn from 'classnames';
import styles from './styles.module.css';
import { DateRange } from '../../ui/date-range';
import { useAppSelector } from '../../redux-store/hooks';
import { selectCurrentShifts } from '../../redux-store/current-shifts';
import { Button } from '../../ui/button';
import { getTitle, getDiffInDays, getFinishDate, getStartDate, validateLength } from './lib';
import { useCreateNewShiftMutation } from '../../redux-store/api';
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

  const { started, preparing } = useAppSelector(selectCurrentShifts);

  const [createShift, { isError, isLoading, isSuccess }] = useCreateNewShiftMutation();

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

    if (validateTitle(titleFieldValue)) {
      createShift({
        title: titleFieldValue.trim(),
        started_at: startFieldValue,
        finished_at: finishFieldValue,
      });
    } else {
      handleValidateTitle();
    }
  };

  const handleValidateTitle = () => {
    setToggleTextFieldError(!validateTitle(titleFieldValue));
  };

  if (isSuccess) {
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
        disabled={isLoading}
        loading={isLoading}
        extClassName={styles.shiftForm__button}
      >
        Создать
      </Button>
    </form>
  );
};
