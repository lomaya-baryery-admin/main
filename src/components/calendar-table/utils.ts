export const getCurrentWordForm = (tasksCount: number) => {
  let count = tasksCount % 100;
  if (count >= 5 && count <= 20) {
    return 'заданий';
  }
  count %= 10;
  if (count === 1) {
    return 'задание';
  }
  if (count >= 2 && count <= 4) {
    return 'задания';
  }
  return 'заданий';
};
