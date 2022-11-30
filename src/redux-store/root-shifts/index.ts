import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../api';
import { IShift } from '../api/models';

export interface IRootShiftsState {
  started: IShift | null;
  preparing: IShift | null;
}

const initialState: IRootShiftsState = {
  started: null,
  preparing: null,
};

const rootShiftsSlice = createSlice({
  name: 'rootShifts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAllShifts.matchFulfilled, (state, { payload }) => {
      if (payload.page === 1) {
        const preparingShift = payload.shifts.find((shift) => shift.status === 'preparing') || null;
        const startedShift = payload.shifts.find((shift) => shift.status === 'started') || null;

        state.preparing = preparingShift;
        state.started = startedShift;
      }
    });
  },
});

export const rootShiftsReducer = rootShiftsSlice.reducer;
export const selectRootShifts = (state: RootState) => state.rootShifts;
