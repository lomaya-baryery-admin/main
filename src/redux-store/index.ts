import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { rootShiftsReducer } from './root-shifts';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    rootShifts: rootShiftsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
