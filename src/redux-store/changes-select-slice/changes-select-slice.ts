import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// смены
interface IchangesState {
  changes: 'all' | 'current' | 'new' | '';
}
const initialState: IchangesState = {
  changes: '',
};
export const changesSelectSlice = createSlice({
  name: '@@select/changes',
  initialState,
  reducers: {
    changesSelectAction: (state, action: PayloadAction<'all' | 'current' | 'new' | ''>) => {
      state.changes = action.payload;
    },
    clearChangesSelectAction: (state) => {
      state.changes = '';
    },
  },
});

export const { changesSelectAction, clearChangesSelectAction } = changesSelectSlice.actions;
