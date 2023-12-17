import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/card/cardSlice';
import useAndNewCarsSlice from './features/used-and-new-cars/useAndNewCarsSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    useAndNewCars: useAndNewCarsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
