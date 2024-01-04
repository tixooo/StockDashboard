import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import stocksReducer from './slices/stocksSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stocksReducer
  }
});

export default store;
