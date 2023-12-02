import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardItems: [],
  isLoading: true,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
