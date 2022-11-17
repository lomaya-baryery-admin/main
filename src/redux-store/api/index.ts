import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IShifts } from './models';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
  tagTypes: ['shifts'],
  endpoints: (builder) => ({
    getAllShifts: builder.query<IShifts, string | undefined>({
      query: (page = '1') => `/shiftspage=${page}`, // for poduction `/shifts?page=${page}`
      providesTags: ['shifts'],
    }),
  }),
});

export const { useGetAllShiftsQuery } = api;
