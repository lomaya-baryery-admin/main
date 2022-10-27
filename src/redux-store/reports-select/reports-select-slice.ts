import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//отчеты участников
interface IreportsState {
  reports: "ждут проверки" | "проверенные" | "отколоненные" | "";
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
        "ждут проверки" | "проверенные" | "отколоненные" | ""
      >
    ) => {
      state.reports = action.payload;
    },
    clearReportsSelectAction: (state, action) => {
      state.reports = "";
    }
  }
});

export const {
  reportsSelectAction,
  clearReportsSelectAction
} = reportsSelectSlice.actions;
