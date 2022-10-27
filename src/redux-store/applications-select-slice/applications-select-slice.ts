import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//заявки на участие
interface IApplicationState {
  application: "активные" | "рассмотренные" | "";
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
      action: PayloadAction<"активные" | "рассмотренные" | "">
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
