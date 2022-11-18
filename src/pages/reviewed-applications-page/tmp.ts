import { IApplicationsResponce } from '../../redux-store/api-slice/types';

// Структура данных, приходящих с сервера
// interface requestsColumnsNames {
//   user_id: string;
//   name: string;
//   surname: string;
//   date_of_birth: string;
//   city: string;
//   phone: string;
//   request_id: string;
//   status: 'approved' | 'declined' | 'pending';
// }

export interface IFilteredApplicationsResponce {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone: string;
  request_id: string;
  status: 'approved' | 'declined';
}

// Захардкоженный массив данных, приходящих с сервера.
// Он нужен просто для образца, в код таблицы идут преобразованные данные с бэка. Про них - ниже
const defaultData: IApplicationsResponce[] = [
  {
    user_id: 'dkfkd943904004fdjfd3438',
    name: 'Иван',
    surname: 'Павлов',
    date_of_birth: '26.09.1849',
    city: 'Ленинград',
    phone: '+79998887766',
    request_id: 'dkfkd943904004fdjfd3438',
    status: 'pending',
  },
  {
    user_id: 'dkfkd943904004fdjfd3439',
    name: 'Дмитрий',
    surname: 'Менделеев',
    date_of_birth: '08.02.1834',
    city: 'Санкт-Петербург',
    phone: '+79998887755',
    request_id: 'dkfkd943904004fdjfd3439',
    status: 'declined',
  },
  {
    user_id: 'dkfkd943904004fdjfd3440',
    name: 'Софья',
    surname: 'Ковалевская',
    date_of_birth: '15.01.1850',
    city: 'Москва',
    phone: '+79998887744',
    request_id: 'dkfkd943904004fdjfd3440',
    status: 'approved',
  },
];

export const tmpData: IFilteredApplicationsResponce[] = JSON.parse(
  JSON.stringify(defaultData.filter((user) => user.status !== 'pending'))
);
