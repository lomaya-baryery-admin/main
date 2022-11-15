// ЛЕЙБЛЫ ДЛЯ СТАТУСОВ

export const statusLable = (value: string): string => {
  switch (value) {
    case 'started':
      return 'Текущая';
    case 'preparing':
      return 'Новая';
    case 'finished':
      return 'Прошедшая';
    case 'cancelled':
      return 'Отмененная';
    default:
      return value;
  }
};

export const statusMapLabelType: {
  [key: string]: 'current' | 'new' | 'past' | 'approved' | 'rejected' | 'review';
} = {
  started: 'approved',
  preparing: 'new',
  finished: 'past',
  cancelled: 'rejected',
};
// лейблы для статусов таблицы рассматренных заявок

export const applicationLabel = (value: 'approved' | 'declined'): string => {
  switch (value) {
    case 'approved':
      return 'Участник одобрен';
    case 'declined':
      return 'Участник отклонён';
    default:
      return value;
  }
};
