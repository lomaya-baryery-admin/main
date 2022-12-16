import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { secondsToMilliseconds } from 'date-fns';
import {
  ICreateShift,
  IRequest,
  IShift,
  IShiftUsers,
  ITask,
  IUserTask,
  TShiftStatus,
  TUpdateShiftSettings,
} from './models';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://lombaryery.tk' }),
  tagTypes: ['shifts'],
  endpoints: (builder) => ({
    getAllShifts: builder.query<IShift[], void>({
      query: () => '/shifts/',
      transformResponse: (response: (Omit<IShift, 'status'> & { status: TShiftStatus })[]) => {
        const transformedResponse = response.filter((shift) => shift.status !== 'cancelled');
        return transformedResponse;
      },
      providesTags: ['shifts'],
    }),
    createNewShift: builder.mutation<Omit<IShift, 'total_users'>, ICreateShift>({
      query: (data) => ({
        url: '/shifts/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'shifts' }],
    }),
    getShiftUsers: builder.query<IShiftUsers, string>({
      query: (shiftId) => `/shifts/${shiftId}/users`,
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
    getTasksUnderReview: builder.query<ITask[], string>({
      query: (shiftId) => '/tasks_under_review', //for production (GET)../user_tasks?status=under_review&shift_id={shift_id}
    }),
    approveTask: builder.mutation<
      ITask,
      { taskId: string; shiftId: string; patch: { task_status: IUserTask['status'] } }
    >({
      //shiftId for manual cache update
      query: (arg) => ({
        url: `/tasks_under_review/${arg.taskId}`, //for production (PATCH)../requests/{request_id}/approve
        method: 'PATCH',
        body: arg.patch, //delete before production
      }),
      async onQueryStarted({ taskId, shiftId, patch }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            api.util.updateQueryData('getTasksUnderReview', shiftId, (draft) => {
              const tasks = draft.map((task) =>
                task.id === taskId ? { ...task, ...patch } : task
              );
              return tasks;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    declineTask: builder.mutation<
      ITask,
      {
        taskId: string;
        shiftId: string;
        patch: {
          task_status: IUserTask['status'];
        };
      }
    >({
      //shiftId for manual cache update
      query: (arg) => ({
        url: `/tasks_under_review/${arg.taskId}`, //for production (PATCH)../requests/{request_id}/decline
        method: 'PATCH',
        body: arg.patch, //delete before production
      }),
      async onQueryStarted({ taskId, shiftId, patch }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            api.util.updateQueryData('getTasksUnderReview', shiftId, (draft) => {
              const tasks = draft.map((task) =>
                task.id === taskId ? { ...task, ...patch } : task
              );
              return tasks;
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
  useGetTasksUnderReviewQuery,
  useApproveTaskMutation,
  useDeclineTaskMutation,
} = api;
