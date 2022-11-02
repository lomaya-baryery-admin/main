import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//заявки на участие
interface IApplicationState {
  application: "active" | "reviewed" | "";
}

const initialState: IApplicationState = {
  application: ""
};

export const applicationSelectSlice = createSlice({
  name: "@@select/application",
  initialState,
  reducers: {
    applicationSelectAction: (
      state,
      action: PayloadAction<"active" | "reviewed" | "">
    ) => {
      state.application = action.payload;
    },
    clearApplicationSelectAction: (state) => {
      state.application = "";
    }
  }
});

export const {
  applicationSelectAction,
  clearApplicationSelectAction
} = applicationSelectSlice.actions;
