import { FC, ReactNode, useRef, useState } from 'react';
import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import './react-datepicker.css';
import ru from 'date-fns/locale/ru';
import cn from 'classnames';
import { getFinishDate, getMonth, getShortenWeekDay, getStartDate } from './lib';
import { StepButton } from '../step-button';
import styles from './styles.module.css';

const customHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps): ReactNode => {
  const month = getMonth(date);

  return (
    <div className={styles.datePicker__calendarHeader}>
      <StepButton dirrection="left" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
      <div>
        <span className={styles.datePicker__headerMonth}>{month}</span>
        <span className={styles.datePicker__headerYear}>
          {date.toLocaleDateString('ru-RU', {
            year: 'numeric',
          })}
        </span>
      </div>
      <StepButton dirrection="right" onClick={increaseMonth} disabled={nextMonthButtonDisabled} />
    </div>
  );
};

export interface IDateRange {
  shift: {
    type: 'preparing' | 'started';
    currentShiftRange: [started_at: string | undefined, finished_at: string | undefined];
  };
  className?: string;
}

export const DateRange: FC<IDateRange> = ({ className, shift }) => {
  const [startDate, setStartDate] = useState(getStartDate(shift));
  const [endDate, setEndDate] = useState(getFinishDate(shift));
  const startDateValueRef = useRef(startDate);

  return (
    <div className={cn(className, styles.dateRange)}>
      <ReactDatePicker
        showPopperArrow={false}
        locale={ru}
        selected={startDate}
        onChange={(date) => {
          if (date) {
            setStartDate(date);
            if (endDate <= date) {
              const finishDate = new Date(date);
              finishDate.setDate(date.getDate() + 1);
              setEndDate(finishDate);
            }
          }
        }}
        wrapperClassName={styles.datePicker}
        className={cn(
          styles.datePicker__input,
          {
            [styles.dataPicker__input_disabled]: shift.type === 'started',
          },
          'text_type_extra_default'
        )}
        calendarClassName={styles.dataPicker__calendar}
        dateFormat="dd.MM.yyyy"
        fixedHeight
        renderCustomHeader={customHeader}
        dayClassName={() => styles.dataPicker__calendarWeekDay}
        formatWeekDay={(formattedDate) => getShortenWeekDay(formattedDate)}
        filterDate={(date) => date >= startDateValueRef.current}
        disabled={shift.type === 'started'}
      />
      <span className={styles.dateRange__divider} />
      <ReactDatePicker
        showPopperArrow={false}
        locale={ru}
        selected={endDate}
        onChange={(date) => setEndDate(date!)}
        wrapperClassName={styles.datePicker}
        className={styles.datePicker__input}
        calendarClassName={styles.dataPicker__calendar}
        dateFormat="dd.MM.yyyy"
        fixedHeight
        renderCustomHeader={customHeader}
        dayClassName={() => styles.dataPicker__calendarWeekDay}
        formatWeekDay={(formattedDate) => getShortenWeekDay(formattedDate)}
        filterDate={(date) => {
          if (shift.type === 'started') {
            return date.getTime() >= new Date().setHours(0, 0, 0, 0);
          }
          return date > startDate;
        }}
      />
    </div>
  );
};
