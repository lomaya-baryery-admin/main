export const config = {
  url: 'http://51.250.32.125:8000',
};

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : Promise.reject(res.status);
