import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
   reducerPath: 'dataApi',
   tagTypes: ['shiftsPost'],
   baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.32.125:8000' }),
   endpoints: (build) => ({
      getDefault: build.query<string, void>({
         query: () => '/hello'
      }),
      shiftsPost: build.mutation({
         query: (body) => ({
            url: '/shifts/',
            method: 'POST',
            body,
         }),
      })
   })
})

export const { useGetDefaultQuery, useShiftsPostMutation } = dataApi