import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    data: [],
    isLoading: true,
    error: "",
};

const url2 = 'http://localhost:3000/used_and_new_cars';

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


  const useAndNewCarsSlice = createSlice({
    name: 'useAndNewCars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUsedAndNewCars.pending, (state) => ({
          ...state,
          isLoading: true,
          error: '',
        }))
        .addCase(getUsedAndNewCars.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          data: action.payload,
        }))
        .addCase(getUsedAndNewCars.rejected, (state, action) => {
          const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
          return {
            ...state,
            isLoading: false,
            error: errorMessage,
          };
        })
        .addCase(addUsedAndNewCars.pending, (state) => ({
            ...state,
            isLoading: true
        }))
        .addCase(addUsedAndNewCars.fulfilled, (state, action) => ({
            ...state,
            isLoading: false,
            data: [...state.data, action.payload]
        }))
        .addCase(addUsedAndNewCars.rejected, (state, action) => {
            const errorMessage = (action.payload instanceof Error) ? action.payload.message : 'An error occurred';
            return {
              ...state,
             isLoading: false,
            error: errorMessage 
            };
        });
    },
  });

    export default useAndNewCarsSlice.reducer;
