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

export const statusMapLabelType: {[key: string]: 'current' | 'new' | 'past' | 'approved' | 'rejected' | 'review'} = {
  started: 'approved',
  preparing: 'new',
  finished: 'past',
  cancelled: 'rejected'
}