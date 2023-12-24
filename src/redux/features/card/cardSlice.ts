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

export const getCardItems = createAsyncThunk('card/getCardItems', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {  
    return error;
  }
});

export const getCardItem = createAsyncThunk(
  'card/getCardItem',
  async (itemId: string | number) => {
    try {
      const res = await axios.get(`${url}/${itemId}`);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCardItems.pending, (state) => {
        state.homePageData.isLoading = true;
      })
      .addCase(getCardItems.fulfilled, (state, action) => {
        state.homePageData.isLoading = false;
        state.homePageData.data = action.payload;
      })
      .addCase(getCardItems.rejected, (state) => {
        state.homePageData.isLoading = false;
        state.detailsPageData.error = "Network Error"
      })
      .addCase(getCardItem.pending, (state) => {
        state.detailsPageData.isLoading = true;
      })
      .addCase(getCardItem.fulfilled, (state, action) => {
        state.detailsPageData.isLoading = false;
        state.detailsPageData.data = action.payload;
      })
      .addCase(getCardItem.rejected, (state) => {
        state.detailsPageData.isLoading = false;
        state.detailsPageData.error = "Network Error"
      });
  },
});

export default cardSlice.reducer;
