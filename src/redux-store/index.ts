import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from './api-slice/api-slice';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>; // для селектора
export type AppDispatch = typeof store.dispatch; // для диспатча
