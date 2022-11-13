import { ChangeEvent, FC, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import style from './new-shift.module.css';
import { Button } from '../../ui/button/button';
import { Calendar } from '../../ui/calendar/calendar';
import { Table } from '../../ui/table/Table';

type TShifts = {
  id: string;
  title: string;
  final_message: string;
  status: string;
  started_at: Date;
  finished_at: Date;
  total_users: number;
  page: number;
  total_page: number;
  users: TUsers[];
};

type TUsers = {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: number;
  city: string;
  phone: string;
  user_tasks: TUserTasks[];
};

type TUserTasks = {
  user_task_id: string;
  status: string;
  task_date: Date;
};

const testResponse = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  title: 'string',
  final_message: 'string',
  status: 'started',
  started_at: '2022-11-09',
  finished_at: '2022-11-09',
  total_users: 50,
  page: 1,
  total_page: 3,
  users: [
    {
      user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'string',
      surname: 'string',
      date_of_birth: '2022-11-09',
      city: 'string',
      phone: 'string',
      user_tasks: [
        {
          user_task_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          status: 'approved',
          task_date: '2022-09-09T09:10:19.890Z',
        },
      ],
    },
  ],
};

const users = [
  {
    user_id: '1',
    name: 'Андрей',
    surname: 'string',
    date_of_birth: '2022-11-09',
    city: 'Москва',
    phone: '8-000-000-00-00',
    user_tasks: [
      {
        user_task_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        status: 'approved',
        task_date: '2022-09-09T09:10:19.890Z',
      },
    ],
  },
  {
    user_id: '2',
    name: 'Илья',
    surname: 'string',
    date_of_birth: '2022-11-09',
    city: 'Москва',
    phone: '8-000-000-00-00',
    user_tasks: [
      {
        user_task_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        status: 'approved',
        task_date: '2022-09-09T09:10:19.890Z',
      },
    ],
  },
  {
    user_id: '3',
    name: 'Леха',
    surname: 'string',
    date_of_birth: '2022-11-09',
    city: 'Москва',
    phone: '8-000-000-00-00',
    user_tasks: [
      {
        user_task_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        status: 'approved',
        task_date: '2022-09-09T09:10:19.890Z',
      },
    ],
  },
];

export const NewShift: FC = () => {
  const [calendar, setCalendar] = useState(false);
  const [nameShift, setNameShift] = useState('');
  const [date, setDate] = useState(new Date());
  const handleNameShift = (e: ChangeEvent<HTMLInputElement>) => {
    setNameShift(e.target.value);
  };
  const openCalendar = () => {
    setCalendar(!calendar);
  };

  function shiftDate() {
    const D = new Date();
    D.setMonth(D.getMonth() + 3);
    return D.toLocaleDateString();
  }

  const usersColumnsHelper = createColumnHelper<TUsers>();
  const responseColumnsHelper = createColumnHelper<TShifts>();
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.container__header}>
          <h2 className={style.container__title}>Новая смена</h2>
          <Button htmlType="button"> Создать</Button>
        </div>
        <Table
          defaultData={[testResponse]}
          columnsData={[
            responseColumnsHelper.accessor((row) => row, {
              header: 'Название  смены',
              cell: () => (
                <input
                  className={nameShift.length > 0 ? style.input__active : style.input}
                  type="text"
                  value={nameShift}
                  onChange={handleNameShift}
                  placeholder="Введите название"
                />
              ),
            }),
            responseColumnsHelper.accessor((row) => row, {
              header: 'Дата старта/окончания',
              cell: () => (
                <div className={style.date__container}>
                  <p className={style.date__text}>
                    {' '}
                    {`${date.toLocaleDateString()} - ${shiftDate()}`}
                  </p>
                  <Button
                    type="secondary"
                    size="small"
                    htmlType="button"
                    className={style.button}
                    onClick={openCalendar}
                  >
                    {date ? 'Изменить' : 'Выбрать дату'}
                  </Button>
                  {calendar && (
                    <div className={style.calendar__container}>
                      <Calendar />
                    </div>
                  )}
                </div>
              ),
            }),
            responseColumnsHelper.accessor((row) => row.total_users, {
              header: 'Кол-во участников',
              cell: (info) => <div className={style.cell}> {info.getValue()} </div>,
            }),
          ]}
          rowHeight={60}
          getRowCanExpand={() => true}
        />
      </div>
      <div className={style.container}>
        <div className={style.container__header}>
          <h2 className={style.container__name}>Участники</h2>
        </div>
        <div className={style.table__container}>
          <Table
            columnsData={[
              usersColumnsHelper.accessor((row) => row.name, {
                header: 'Имя и фамилия',
                cell: (info) => (
                  <p key={info.getValue()} className={style.member__name}>
                    {info.getValue()}
                  </p>
                ),
              }),
              usersColumnsHelper.accessor((row) => row.city, {
                header: 'Город',
                cell: (info) => (
                  <div key={info.getValue()} className={style.cell}>
                    {' '}
                    {info.getValue()}{' '}
                  </div>
                ),
              }),
              usersColumnsHelper.accessor((row) => row.phone, {
                header: 'Телефон',
                cell: (info) => (
                  <div key={info.getValue()} className={style.cell}>
                    {' '}
                    {info.getValue()}{' '}
                  </div>
                ),
              }),
              usersColumnsHelper.accessor((row) => row.date_of_birth, {
                header: 'Дата рождения',
                cell: (info) => (
                  <div key={info.getValue()} className={style.cell}>
                    {' '}
                    {info.getValue()}{' '}
                  </div>
                ),
              }),
            ]}
            defaultData={users}
            rowHeight={60}
            getRowCanExpand={() => true}
          />
        </div>
      </div>
    </div>
  );
};
