import { configureStore } from "@reduxjs/toolkit";
import { changesSelectSlice } from "./changes-select-slice/changes-select-slice";
import { applicationSelectSlice } from "./applications-select-slice/applications-select-slice";
import { reportsSelectSlice } from "./reports-select-slice/reports-select-slice";
import { dataApi } from './rtk-query/dataService'

export const store = configureStore({
  reducer: {
    changesSelectReducer: changesSelectSlice.reducer,
    applicationSelectReducer: applicationSelectSlice.reducer,
    reportsSelectReducer: reportsSelectSlice.reducer,
    [dataApi.reducerPath]: dataApi.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>; //для селектора
export type AppDispatch = typeof store.dispatch; //для диспатча
