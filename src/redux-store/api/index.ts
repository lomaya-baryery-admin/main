import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { secondsToMilliseconds } from 'date-fns';
import {
  ICreateShift,
  IRequest,
  IShift,
  IShifts,
  IShiftUsers,
  TUpdateShiftSettings,
} from './models';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
  tagTypes: ['shifts'],
  endpoints: (builder) => ({
    getAllShifts: builder.query<IShifts, number | undefined>({
      query: (page = 1) => `/shiftspage=${page}`, // for poduction (GET)../shifts?page=1
      providesTags: (result, error, arg) => (result ? [{ type: 'shifts', id: arg }] : ['shifts']),
    }),
    createNewShift: builder.mutation<Omit<IShift, 'total_users'>, ICreateShift>({
      query: (data) => ({
        url: '/shiftspage=6', //for production (POST)../shifts
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'shifts' }],
    }),
    getShiftUsers: builder.query<IShiftUsers, IShift['id']>({
      query: (shiftId) => '/preparingshift', //for production (GET)../shifts/{shift_id}/users (пока без пагинации)
    }),
    updateShiftSettings: builder.mutation<Omit<IShift, 'total_users'>, TUpdateShiftSettings>({
      query: ({ shiftId, ...body }) => ({
        url: '/shiftspage=7', //for production (PATCH)../shifts/{shift_id}
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'shifts', id: 1 }],
    }),
    finishShift: builder.mutation<Omit<IShift, 'total_users'>, string>({
      query: (shiftId) => ({
        url: '/shiftspage=8', //for production (PATCH)../shifts/{shift_id}/finish
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'shifts', id: 1 }],
    }),
    getPendingRequests: builder.query<IRequest[], string>({
      query: (shiftId) => '/requests_pending?status=pending', //for production (GET)../shifts/{shift_id}/requests?status=pending
    }),
    approveRequest: builder.mutation<IRequest, { requestId: string; shiftId: string }>({
      //shiftId for manual cache update
      query: (arg) => ({
        url: `/requests_pending/${arg.requestId}`, //for production (PATCH)../requests/{request_id}/approve
        method: 'PATCH',
        body: { status: 'approved' }, //delete before production
      }),
      async onQueryStarted({ requestId, shiftId }, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedRequest } = await queryFulfilled;
          dispatch(
            api.util.updateQueryData('getPendingRequests', shiftId, (draft) => {
              const requests = draft.map((request) =>
                request.id === requestId ? updatedRequest : request
              );
              return requests;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    declineRequest: builder.mutation<IRequest, { requestId: string; shiftId: string }>({
      //shiftId for manual cache update
      query: (arg) => ({
        url: `/requests_pending/${arg.requestId}`, //for production (PATCH)../requests/{request_id}/decline
        method: 'PATCH',
        body: { status: 'declined' }, //delete before production
      }),
      async onQueryStarted({ requestId, shiftId }, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedRequest } = await queryFulfilled;
          dispatch(
            api.util.updateQueryData('getPendingRequests', shiftId, (draft) => {
              const requests = draft.map((request) =>
                request.id === requestId ? updatedRequest : request
              );
              return requests;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetAllShiftsQuery,
  useCreateNewShiftMutation,
  useGetShiftUsersQuery,
  useUpdateShiftSettingsMutation,
  useFinishShiftMutation,
  useGetPendingRequestsQuery,
  useApproveRequestMutation,
  useDeclineRequestMutation,
} = api;
