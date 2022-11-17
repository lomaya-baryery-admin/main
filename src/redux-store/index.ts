import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { currentShiftsReducer } from './current-shifts';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    currentShifts: currentShiftsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
