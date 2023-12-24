import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  homePageData: {
    data: [],
    searchResults: [],
    isLoading: true,
    error: "",
  },
  detailsPageData: {
    data: {},
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

export const getSearchByMake = createAsyncThunk(
  'card/seachByMake',
  async (make: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}?title=${make}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const getSearchByModel = createAsyncThunk(
  'card/seachByModel',
  async (model: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}?model=${model}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSearchByYear = createAsyncThunk(
  'card/seachByYear',
  async (year: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}?year=${year}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSearchByPrice = createAsyncThunk(
  'card/seachByPrice',
  async (price: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}?price=${price}`);
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
      .addCase(getSearchByMake.pending, (state) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: true, error: '' }
      }))
      .addCase(getSearchByMake.fulfilled, (state, action) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, searchResults: action.payload }
      }))
      .addCase(getSearchByMake.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, error: errorMessage }
        }})
      .addCase(getSearchByModel.pending, (state) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: true, error: '' }
      }))
      .addCase(getSearchByModel.fulfilled, (state, action) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, searchResults: action.payload }
      }))
      .addCase(getSearchByModel.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, error: errorMessage }
        }})
      .addCase(getSearchByYear.pending, (state) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: true, error: '' }
      }))
      .addCase(getSearchByYear.fulfilled, (state, action) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, searchResults: action.payload }
      }))
      .addCase(getSearchByYear.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, error: errorMessage }
        }})
      .addCase(getSearchByPrice.pending, (state) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: true, error: '' }
      }))
      .addCase(getSearchByPrice.fulfilled, (state, action) => ({
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, searchResults: action.payload }
      }))
      .addCase(getSearchByPrice.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
        ...state,
        homePageData: { ...state.homePageData, isLoading: false, error: errorMessage }
        }})
  },
});

export default cardSlice.reducer;
