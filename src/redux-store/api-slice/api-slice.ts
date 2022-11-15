import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IApplicationsResponce,
  IdefaultObject,
  IInformation,
  IResponceShifts,
  IshiftCreate,
} from './types';

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
    fetchApplications: build.query<IApplicationsResponce[], string | undefined>({
      query: (shiftId) => ({
        url: `/shifts/${shiftId}/requests`,
      }),
    }),
    applicationPutchApprove: build.mutation<IApplicationsResponce, string | undefined>({
      query: (requestId) => ({
        url: `/requests/${requestId}/approve`,
        method: 'PATCH',
      }),
    }),
    applicationPutchDecline: build.mutation<IApplicationsResponce, string | undefined>({
      query: (requestId) => ({
        url: `/requests/${requestId}/decline`,
        method: 'PATCH',
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
  useFetchApplicationsQuery,
  useApplicationPutchApproveMutation,
  useApplicationPutchDeclineMutation
} = dataApi;
