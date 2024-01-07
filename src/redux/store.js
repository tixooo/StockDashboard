import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import stocksReducer from './slices/stocksSlice.js';
import sideBarStockSlice from './slices/sideBarStockSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stocksReducer,
    sideBarStocks: sideBarStockSlice
  }
});

export default store;
