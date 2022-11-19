// ЛЕЙБЛЫ ДЛЯ СТАТУСОВ

export const statusLable = (value: string): string => {
  switch (value) {
    case 'current':
      return 'Текущая';
    case 'new':
      return 'Новая';
    case 'past':
      return 'Прошедшая';
    default:
      return value;
  }
};

// лейблы для статусов таблицы рассматренных заявок

export const applicationLabel = (value: 'approved' | 'declined'): string => {
  switch (value) {
    case 'approved':
      return 'Участник одобрен'
    case 'declined':
      return 'Участник отклонён';
    default:
      return value;
  }
}
