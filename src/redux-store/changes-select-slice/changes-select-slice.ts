import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//смены
interface IchangesState {
  changes: "все" | "текущая" | "новая" | "";
}
const initialState: IchangesState = {
  changes: ""
};
export const changesSelectSlice = createSlice({
  name: "@@select/changes",
  initialState,
  reducers: {
    changesSelectAction: (
      state,
      action: PayloadAction<"все" | "текущая" | "новая" | "">
    ) => {
      state.changes = action.payload;
    },
    clearChangesSelectAction: (state) => {
      state.changes = "";
    }
  }
});

export const {
  changesSelectAction,
  clearChangesSelectAction
} = changesSelectSlice.actions;
