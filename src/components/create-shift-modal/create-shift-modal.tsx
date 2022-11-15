import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../../ui/modal/modal';
import { Input } from '../../ui/input/input';
import useForm from '../../hooks/use-form';
import { getInitialDates, getNumberOfDays, changeFormatDates } from './utils';
import styles from './create-shift-modal.module.css';
import { useShiftsPostMutation } from '../../redux-store/api-slice/api-slice';
import { IShiftCreate } from '../../redux-store/api-slice/types';
import { Spinner } from '../../ui/spinner/spinner';

interface Props {
  handleCloseModal: () => void;
}

const MAX_DAYS_COUNT = 90;

export const CreateShiftModal: React.FC<Props> = ({ handleCloseModal }) => {
  const navigate = useNavigate();
  const { values, handleChange, setValues } = useForm<IShiftCreate>({
    title: '',
    started_at: '',
    finished_at: '',
  });
  const initialDates = getInitialDates();
  const isFormNotValid = useMemo<boolean>(
    () => Object.entries(values).some(([key, value]) => !value),
    [values]
  );
  const [createShift, { data: shiftData, isLoading }] = useShiftsPostMutation();
  const [isShowInputError, setIsShowInputError] = useState<boolean>(false);

  const selectedDaysCount = useMemo((): number => {
    if (values?.started_at && values?.finished_at) {
      return getNumberOfDays(values.started_at, values.finished_at);
    }

    return MAX_DAYS_COUNT;
  }, [values]);

  useEffect(() => {
    if (initialDates) {
      setValues({ ...values, started_at: initialDates.start, finished_at: initialDates.finish });
    }
  }, []);

  const createNewShift = async (body: IShiftCreate): Promise<void> => {
    try {
      await createShift(body).unwrap();
      navigate('/shift/new');
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmit = (): void => {
    if (isFormNotValid) {
      setIsShowInputError(true);
    } else {
      const startDate = changeFormatDates(values.started_at, 'yyyy-mm-dd');
      const finishDate = changeFormatDates(values.finished_at, 'yyyy-mm-dd');
      createNewShift({ ...values, started_at: startDate, finished_at: finishDate });
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value && isShowInputError) {
      setIsShowInputError(false);
      handleChange(event);
    } else {
      handleChange(event);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Modal
        title="Новая смена"
        buttonText="Создать"
        handleCloseModal={handleCloseModal}
        isBtnDisable={false}
        handleButtonClick={handleFormSubmit}
      >
        <form className={styles.form}>
          <div className={styles.row}>
            <span className={styles.label}>Название</span>
            <div className={styles.inputWrap}>
              <Input
                value={values.title}
                onChange={handleTitleChange}
                className={styles.input}
                name="title"
              />
              {isShowInputError && <div className={styles.formError}>заполните название смены</div>}
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Дата</span>
            <div className={`${styles.dateInputsWrapper} ${styles.inputWrap}`}>
              <Input
                value={values.started_at}
                onChange={handleChange}
                className={`${styles.input} ${styles.dateInput}`}
                name="started_at"
              />
              <div className={styles.line} />
              <Input
                value={values.finished_at}
                onChange={handleChange}
                className={`${styles.input} ${styles.dateInput}`}
                name="finished_at"
              />
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Выбрано дней</span>
            <div className={`${styles.inputWrap} ${styles.daysCount}`}>{selectedDaysCount}</div>
          </div>
        </form>
      </Modal>
    </>
  );
};
