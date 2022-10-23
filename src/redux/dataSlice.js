import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('data/fetchData',async (country) => {
    if(country === "Global"){
        const response = await axios('https://covid19.mathdro.id/api')
        return response.data
    }else{
        const response = await axios(`https://covid19.mathdro.id/api/countries/${country}`);
        return response.data
    }
})


export const fetchCountries = createAsyncThunk('data/fetchCountries',async () => {
    const response = await axios('https://covid19.mathdro.id/api/countries')
    return response.data.countries
})


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        items:[],
        countries:[],
        status: 'idle',
        countryStatus: 'idle',
        error:"",
    },
    reducers: {
    },
    extraReducers:{
        [fetchData.fulfilled]: (state,action) => {
            state.items = action.payload
            state.status = 'succeeded'
        },
        [fetchData.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchData.rejected]: (state,action) => {
            state.status = 'failed'
        },

        [fetchCountries.fulfilled]: (state,action) => {
            state.countries = action.payload
            state.countryStatus = 'succeeded'
        },
        [fetchCountries.pending]: (state,action) => {
            state.countryStatus = 'loading'
        },
        [fetchCountries.rejected]: (state,action) => {
            state.countryStatus = 'failed'
        }

    }
});

export default dataSlice.reducer;
export const status = state => state.data.status
export const selectAll = state => state.data.items
export const getError = state => state.data.error
export const countryListStatus = state => state.data.countryStatus  
export const countryList = state => state.data.countries
