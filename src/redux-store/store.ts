import { configureStore } from "@reduxjs/toolkit";
import { changesSelectSlice } from "./changes-select-slice/changes-select-slice";
import { applicationSelectSlice } from "./applications-select-slice/applications-select-slice";
import { reportsSelectSlice } from "./reports-select-slice/reports-select-slice";
import { defaultSlice } from "./default-slice/default-slice";
import { shiftCreateSlice } from "./shifts-create-slice/shifts-create-slice";
import { shiftGetSlice } from './shifts-get-slice/shifts-get-slice'

export const store = configureStore({
  reducer: {
    changesSelectReducer: changesSelectSlice.reducer,
    applicationSelectReducer: applicationSelectSlice.reducer,
    reportsSelectReducer: reportsSelectSlice.reducer,
    defaultReducer: defaultSlice.reducer,
    shiftsCreateReducer: shiftCreateSlice.reducer,
    shiftGetReducer: shiftGetSlice.reducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>; //для селектора
export type AppDispatch = typeof store.dispatch; //для диспатча
