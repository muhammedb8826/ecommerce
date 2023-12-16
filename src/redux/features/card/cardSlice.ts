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
  usedAndNewCarsPageData: {
    data: [],
    isLoading: true,
    error: "",
  },
};

const url = 'http://localhost:3000/card';
const url2 = 'http://localhost:3000/used_and_new_cars';


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

export const getUsedAndNewCars = createAsyncThunk(
  'card/getUsedAndNewCars',
  async (_,{ rejectWithValue }) => {
    try {
      const res = await axios.get(url2);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const addUsedAndNewCars = createAsyncThunk(
  'card/addUsedAndNewCars',
  async (formData: FormData, { rejectWithValue }) => {
    const { carName, description, price, location, tag, image } = Object.fromEntries(formData);
    try {
      const data = {
        carName,
        description,
        price,
        location,
        tag,
        image,
        favorite: false,
      };
      console.log(data);
      
      const response = await axios.post(url2, data);
      return response.data;
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
      .addCase(getUsedAndNewCars.pending, (state) => ({
        ...state,
        usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: true, error: ''}
      }))
      .addCase(getUsedAndNewCars.fulfilled, (state, action) => ({
        ...state,
        usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: false, data: action.payload }
      }))
      .addCase(getUsedAndNewCars.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
          ...state,
          usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: false, error: errorMessage }
        };
      })
      .addCase(addUsedAndNewCars.pending, (state) => ({
        ...state,
        usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: true}
      }))
      .addCase(addUsedAndNewCars.fulfilled, (state, action) => ({
        ...state,
        usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: false, data: action.payload }
      }))
      .addCase(addUsedAndNewCars.rejected, (state, action) => {
        const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
        return {
          ...state,
          usedAndNewCarsPageData: { ...state.usedAndNewCarsPageData, isLoading: false, error: errorMessage }
        };
      });
  },
});

export default cardSlice.reducer;
