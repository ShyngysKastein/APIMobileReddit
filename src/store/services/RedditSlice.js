import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from '../../../axios-reddit';

export  const getData = createAsyncThunk(
    'reddit/getData',
    async () => {
        const res = await axios.get('pics.json');
        const result = res.data;
        return result.data.children;
    }
);

const initialState = {
    arrRaddit:[],
    error:null,
    isLoading:false
}

const redditSlice = createSlice({
    name:'reddit',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getData.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getData.rejected,(state,action) => {
            state.error = action.error;
            state.isLoading = false;
        })
        .addCase(getData.fulfilled,(state,action) => {
           state.arrRaddit = Object.keys(action.payload).map((id) => {
                return {...action.payload[id],id}
           })
           
           state.isLoading = false;
        })
        } 
})

export default redditSlice.reducer;
