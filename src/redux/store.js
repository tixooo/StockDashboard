import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import stocksReducer from './slices/stocksSlice.js';
import sideBarStockSlice from './slices/sideBarStockSlice.js';
import themeSlice from './slices/themeSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stocksReducer,
    sideBarStocks: sideBarStockSlice,
    theme: themeSlice
  }
});

export default store;
