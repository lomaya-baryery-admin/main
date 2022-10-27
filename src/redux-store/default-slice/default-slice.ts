import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, checkResponse } from '../../utils/api'

interface IObject {
  answer: string;
}

interface IState {
  entities: IObject;
  loading: string;
  error: string;
}

export const defaultList = createAsyncThunk(
  "@@default",
  async () => {
    const response = await fetch(`${config.url}/hello`);
    const data = checkResponse<IObject>(response);
    return data;
  });

const initialState: IState = {
  entities: { answer: '' },
  loading: "idle",
  error: ""
};

export const defaultSlice = createSlice({
  name: "@@default",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(defaultList.pending, (state) => {
        state.loading = "loading";
        state.error = "";
      })
      .addCase(defaultList.rejected, (state) => {
        state.loading = "idle";
        state.error = "Something went wrong";
      })
      .addCase(defaultList.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = "idle";
        state.error = "";
      });
  }
});
