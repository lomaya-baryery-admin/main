import { ChangeEvent, FC, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import style from './new-shift.module.css';
import { Button } from '../../ui/button/button';
import { Calendar } from '../../ui/calendar/calendar';
import { Table } from '../../ui/table/Table';
import { SearchIcon } from '../../ui/icons';

type TTestTable = {
  one: any;
  two: number;
  three: string;
  four: number;
};

export const NewShift: FC = () => {
  const [calendar, setCalendar] = useState(false);
  const [nameShift, setNameShift] = useState('');
  const [date, setDate] = useState<Date>(new Date(1995, 11, 17));
  const handleNameShift = (e: ChangeEvent<HTMLInputElement>) => {
    setNameShift(e.target.value);
  };
  const openCalendar = () => {
    setCalendar(!calendar);
  };
  const testColumnsHelper = createColumnHelper<TTestTable>();
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
            <li className={style.item}>
              <input
                className={nameShift.length > 0 ? style.input__active : style.input}
                type="text"
                value={nameShift}
                onChange={handleNameShift}
                placeholder="Введите название"
              />{' '}
            </li>
            <li className={style.item}>
              <div className={style.date__container}>
                <p className={style.date__text}> {date.toLocaleDateString()}</p>
                <Button
                  type={calendar ? 'secondary' : 'primary'}
                  size="small"
                  htmlType="button"
                  className={style.button}
                  onClick={openCalendar}
                >
                  {date ? 'Изменить' : 'Выбрать дату'}
                </Button>
              </div>
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
        <div className={style.table__container}>
          <Table
            columnsData={[
              testColumnsHelper.accessor((row) => row.one, {
                header: 'Имя и фамилия',
                cell: (info) => info.getValue(),
              }),
              testColumnsHelper.accessor((row) => row.two, {
                header: 'Город',
                cell: (info) => info.getValue(),
              }),
              testColumnsHelper.accessor((row) => row.three, {
                header: 'Телефон',
                cell: (info) => info.getValue(),
              }),
              testColumnsHelper.accessor((row) => row.four, {
                header: 'Дата рождения',
                cell: (info) => info.getValue(),
              }),
            ]}
            defaultData={[
              {
                one: (
                  <div className={style.member__container}>
                    {' '}
                    <SearchIcon type="error" /> <p className={style.member__name}>Имя Фамилия</p>{' '}
                  </div>
                ),
                two: 'Название города',
                three: +79000000000,
                four: 0,
              },
              {
                one: 'Имя Фамилия',
                two: 'Название города',
                three: +79000000000,
                four: 0,
              },
              {
                one: 'Имя Фамилия',
                two: 'Название города',
                three: +79000000000,
                four: 0,
              },
            ]}
            rowHeight={60}
          />
        </div>
      </div>
    </div>
  );
};
