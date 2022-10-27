import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, checkResponse } from '../../utils/api'

//создание новой смены
interface IshiftCreate {
   started_at: string,
   finished_at: string
}

interface IResponceShifts extends IshiftCreate {
   id: string;
   status: string;
}

interface IStateShifts {
   id: string;
   status: string;
   started_at: string;
   finished_at: string;
   loading: string
   error: string;
}

export const shiftCreate = createAsyncThunk(
   "@@shifts/create",
   async (shiftCreate: IshiftCreate) => {
      const { started_at, finished_at } = shiftCreate
      const response = await fetch(`${config.url}/shifts/`, {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            started_at: started_at,
            finished_at: finished_at
         })
      });
      const data = checkResponse<IResponceShifts>(response);
      return data;
   });

const initialState: IStateShifts = {
   id: '',
   status: '',
   started_at: '',
   finished_at: '',
   loading: "idle",
   error: ""
}


export const shiftCreateSlice = createSlice({
   name: '@@shifts',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(shiftCreate.pending, (state, action) => {
            state.loading = 'loading';
            state.error = "";
            state.id = '';
            state.started_at = action.payload
         })
   }
})