import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardItems: [],
  isLoading: true,
};

const url = 'http://localhost:8000/card';

export const getCardItems = createAsyncThunk('card/getCardItems', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
});

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: {
    [getCardItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCardItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cardItems = action.payload;
    },
    [getCardItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cardSlice.reducer;
