import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateShift, IShift, IShifts, IShiftUsers } from './models';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
  tagTypes: ['shifts'],
  endpoints: (builder) => ({
    getAllShifts: builder.query<IShifts, string | undefined>({
      query: (page = '1') => `/shiftspage=${page}`, // for poduction (GET)../shifts?page=1
      providesTags: ['shifts'],
    }),
    createNewShift: builder.mutation<Omit<IShift, 'total_users'>, ICreateShift>({
      query: (data) => ({
        url: '/shiftspage=6', //for production (POST)../shifts
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['shifts'],
    }),
    getShiftUsers: builder.query<IShiftUsers, IShift['id']>({
      query: (shiftId) => '/preparingshift', //for production (GET)../shifts/{shift_id}/users (пока без пагинации)
    }),
  }),
});

export const { useGetAllShiftsQuery, useCreateNewShiftMutation, useGetShiftUsersQuery } = api;
