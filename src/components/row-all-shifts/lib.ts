export const getShiftNumber = (id: string): string | number => {
  const number = id.match(/\d{4}/g);
  return number ? number[0] : '000';
};
