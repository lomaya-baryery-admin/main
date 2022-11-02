// ЛЕЙБЛЫ ДЛЯ СТАТУСОВ

export const statusLable = (value: string): string => {
  switch(value) {
    case 'current': return 'Текущая'
    case 'new': return 'Новая'
    case 'past': return 'Прошедшая'
    default: return value
  };
}