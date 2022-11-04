import { FC, useState } from 'react';
import style from './new-shift.module.css';
import { Button } from '../../ui/button/button';
import { Calendar } from '../../ui/calendar/calendar';

export const NewShift: FC = () => {
  const [calendar, setCalendar] = useState(false);
  const openCalendar = () => {
    setCalendar(!calendar);
  };

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.container__header}>
          <h2 className={style.container__title}>Новая смена</h2>
          <Button htmlType="button"> Создать</Button>
        </div>
        <div className={style.tablet}>
          <ul className={style.list_names}>
            <li className={style.item}>Номер смены</li>
            <li className={style.item}>Дата старта/окончания</li>
            <li className={style.item}>Кол-во участников</li>
          </ul>
          <ul className={style.list_shift}>
            <li className={style.item}>Смена 1</li>
            <li className={style.item}>
              <Button
                type={calendar ? 'secondary' : 'primary'}
                size="small"
                htmlType="button"
                className={style.button}
                onClick={openCalendar}
              >
                Выбрать дату
              </Button>
            </li>
            <li className={style.item}>3</li>
          </ul>
          {calendar && (
            <div className={style.calendar__container}>
              <Calendar />
            </div>
          )}
        </div>
      </div>
      <div className={style.container}>
        <div className={style.container__header}>
          <h2 className={style.container__name}>Участники</h2>
          <Button type="secondary" size="small" htmlType="button">
            {' '}
            + Добавить участника
          </Button>
        </div>
      </div>
    </div>
  );
};
