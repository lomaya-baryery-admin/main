import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, checkResponse } from '../../utils/api';
import { RootState } from "../../redux-store/store";

//получение информации о смене
interface IInformation {
   id: string;
   status: "started" | "finished" | "preparing" | "cancelled";
   started_at: string;
   finished_at: string;
}

interface IStateShiftsGet {
   id: string;
   status: "started" | "finished" | "preparing" | "cancelled" | "";
   started_at: string;
   finished_at: string;
   loading: string;
   error: string;
}

export const shiftGet = createAsyncThunk<
   IInformation,
   undefined,
   { state: RootState }
>
   (
      "@@shiftsGet",
      async (_, { getState }) => {
         const shiftId = getState().shiftsCreateReducer.id;
         const response = await fetch(`${config.url}/shifts/${shiftId}`);
         const data = checkResponse<IInformation>(response);
         return data;
      });

const initialState: IStateShiftsGet = {
   id: "",
   status: "",
   started_at: "",
   finished_at: "",
   loading: "idle",
   error: ""
};

export const shiftGetSlice = createSlice({
   name: "shifts/get",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(shiftGet.pending, (state, action) => {
            state.loading = "loading";
            state.error = "";
            state.id = "";
            state.started_at = "";
            state.finished_at = "";
            state.status = "";
         })
         .addCase(shiftGet.rejected, (state, action) => {
            state.loading = "idle";
            state.error = action.error.message as string;
         })
         .addCase(shiftGet.fulfilled, (state, action) => {
            state.id = action.payload.id;
            state.started_at = action.payload.started_at;
            state.finished_at = action.payload.finished_at;
            state.status = action.payload.status;
            state.loading = "idle";
            state.error = "";
         });
   }
});
