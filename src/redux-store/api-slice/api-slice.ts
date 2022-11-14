import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponceShifts, IshiftCreate, IInformation, IdefaultObject, IShiftsAll } from './types';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  tagTypes: ['data'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.32.125:8000' }),
  endpoints: (build) => ({
    getDefault: build.query<IdefaultObject, void>({
      query: () => '/healthcheck',
      providesTags: ['data'],
    }),
    shiftsPost: build.mutation<IResponceShifts, IshiftCreate>({
      query: (body) => ({
        url: '/shifts/',
        method: 'POST',
        body,
      }),
      // invalidatesTags: ['data']
    }),
    shiftsGet: build.query<IInformation, string | undefined>({
      query: (shiftId) => ({
        url: `/shifts/${shiftId}`,
      }),
    }),
    shiftsPatch: build.mutation<IResponceShifts, { body: IResponceShifts; shiftId: string }>({
      query: ({ body, shiftId }) => ({
        url: `/shifts/${shiftId}`,
        method: 'PATCH',
        body,
      }),
    }),
    shiftsPut: build.mutation<IResponceShifts, { body: IResponceShifts; shiftId: string }>({
      query: ({ body, shiftId }) => ({
        url: `/shifts/${shiftId}/actions/start`,
        method: 'PUT',
        body,
      }),
    }),
    /* shiftsAllGet: build.query<IShiftsAll, void>({
      query: () => ({
        url: `/shifts`,
      }),
    }), */
    shiftsAllGet: build.mutation<IResponceShifts, number>({
      query: (page) => ({
        url: `/shifts/?page=${page}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetDefaultQuery,
  useShiftsPostMutation,
  useShiftsGetQuery,
  useShiftsPatchMutation,
  useShiftsPutMutation,
  useShiftsAllGetMutation,
} = dataApi;
