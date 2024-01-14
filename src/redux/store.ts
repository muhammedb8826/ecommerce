import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/card/cardSlice';
import usedAndNewCarsSlice from './features/used-and-new-cars/usedAndNewCarsSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    useAndNewCars: usedAndNewCarsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
