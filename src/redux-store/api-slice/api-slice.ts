import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponceShifts, IshiftCreate, IInformation, IdefaultObject } from './types';

export const dataApi = createApi({
   reducerPath: 'dataApi',
   tagTypes: [''],
   baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.32.125:8000' }),
   endpoints: (build) => ({
      getDefault: build.query<IdefaultObject, void>({
         query: () => '/hello'
      }),
      shiftsPost: build.mutation<IResponceShifts, IshiftCreate>({
         query: (body) => ({
            url: '/shifts/',
            method: 'POST',
            body,
         }),
      }),
      shiftsPostGet: build.query<IInformation, void>({
         query: (shiftId) => `/shifts/${shiftId}`
      })
   })
})

export const { useGetDefaultQuery, useShiftsPostMutation, useShiftsPostGetQuery } = dataApi