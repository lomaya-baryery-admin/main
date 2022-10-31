import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//отчеты участников
interface IreportsState {
  reports: "waiting for verification" | "tested" | "rejected" | "";
}
const initialState: IreportsState = {
  reports: ""
};
export const reportsSelectSlice = createSlice({
  name: "@@select/reports",
  initialState,
  reducers: {
    reportsSelectAction: (
      state,
      action: PayloadAction<
        "waiting for verification" | "tested" | "rejected" | ""
      >
    ) => {
      state.reports = action.payload;
    },
    clearReportsSelectAction: (state) => {
      state.reports = "";
    }
  }
});

export const {
  reportsSelectAction,
  clearReportsSelectAction
} = reportsSelectSlice.actions;
