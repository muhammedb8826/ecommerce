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

export const getUsedAndNewCars = createAsyncThunk(
  'card/getUsedAndNewCars',
  async () => {
    try {
      const res = await axios.get(url2);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);


export const addUsedAndNewCars = createAsyncThunk(
  'card/addUsedAndNewCars',
  async (formData: FormData) => {
    const { title, description, price, location, tag, image } = Object.fromEntries(formData);
    console.log(formData);
    try {
      const data = {
        title,
        description,
        price,
        location,
        tag,
        image,
      };


      const res = await axios.post(url2, data);
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
      })
      .addCase(getUsedAndNewCars.pending, (state) => {
        state.usedAndNewCarsPageData.isLoading = true;
      })
      .addCase(getUsedAndNewCars.fulfilled, (state, action) => {
        state.usedAndNewCarsPageData.isLoading = false;
        state.usedAndNewCarsPageData.data = action.payload;
      })
      .addCase(getUsedAndNewCars.rejected, (state) => {
        state.usedAndNewCarsPageData.isLoading = false;
        state.usedAndNewCarsPageData.error = "Network Error"
      })
      .addCase(addUsedAndNewCars.pending, (state) => {
        state.usedAndNewCarsPageData.isLoading = true;
      })
      .addCase(addUsedAndNewCars.fulfilled, (state, action) => {
        state.usedAndNewCarsPageData.isLoading = false;
        state.usedAndNewCarsPageData.data = action.payload;
      })
      .addCase(addUsedAndNewCars.rejected, (state) => {
        state.usedAndNewCarsPageData.isLoading = false;
        state.usedAndNewCarsPageData.error = "Network Error"
      });
  },
});

export default cardSlice.reducer;
