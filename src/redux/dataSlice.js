import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGlobalData = createAsyncThunk('data/fetchGlobalData',async () => {
    const response = await axios('https://covid19.mathdro.id/api');
    return response.data
})


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        items:[],
        status: 'idle',
        error:""
    },
    reducers: {},
    extraReducers:{
        [fetchGlobalData.fulfilled]: (state,action) => {
            state.items = action.payload
            state.status = 'succeeded'
        },
        [fetchGlobalData.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchGlobalData.rejected]: (state,action) => {
            state.status = 'failed'
        }

    }
});

export default dataSlice.reducer;
export const status = state => state.data.status
export const selectAll = state => state.data.items
export const getError = state => state.data.error
