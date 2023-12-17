import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  homePageData: {
    data: [],
    isLoading: true,
    error: "",
  },
  detailsPageData: {
    data: null,
    isLoading: true,
    error: "",
  },
};

const url = 'http://localhost:3000/card';



export const getCardItems = createAsyncThunk('card/getCardItems', async (_,{ rejectWithValue }) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {  
      return rejectWithValue(error);
  }
});

export const getCardItem = createAsyncThunk(
  'card/getCardItem',
  async (itemId: string | number, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}/${itemId}`);
      return res.data;
    } catch (error) {
  
      return rejectWithValue(error);

    }
  }
);


const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCardItems.pending, (state) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: true, error: '' }
      }))
      .addCase(getCardItems.fulfilled, (state, action) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, data: action.payload }
      }))
      .addCase(getCardItems.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, error: errorMessage }
        }})
      .addCase(getCardItem.pending, (state) => ({
        ...state,
        detailsPageData: { ...state.detailsPageData, isLoading: true}
      }))
      .addCase(getCardItem.fulfilled, (state, action) => ({
       ...state, 
        detailsPageData: { ...state.detailsPageData, isLoading: false, data: action.payload }
      }))
      .addCase(getCardItem.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return{...state,
        detailsPageData: { ...state.detailsPageData, isLoading: false, error: errorMessage }
      }})
  },
});

export default cardSlice.reducer;
