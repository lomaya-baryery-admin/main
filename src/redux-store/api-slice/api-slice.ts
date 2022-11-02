import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponceShifts, IshiftCreate, IInformation, IdefaultObject } from './types';

export const dataApi = createApi({
   reducerPath: 'dataApi',
   tagTypes: ['data'],
   baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.32.125:8000' }),
   endpoints: (build) => ({
      getDefault: build.query<IdefaultObject, void>({
         query: () => '/healthcheck',
         providesTags: ['data']
      }),
      shiftsPost: build.mutation<IResponceShifts, IshiftCreate>({
         query: (body) => ({
            url: '/shifts/',
            method: 'POST',
            body,
         }),
         // invalidatesTags: ['data']
      }),
      shiftsPostGet: build.query<IInformation, string | undefined>({
         query: (shiftId) => ({
            url: `/shifts/${shiftId}`,
         })
      })
   })
})

export const { useGetDefaultQuery, useShiftsPostMutation, useShiftsPostGetQuery } = dataApi