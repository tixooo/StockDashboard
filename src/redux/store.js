import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import stockDataReducer from './slices/stocksSlice.js';
import sideBarStockSlice from './slices/sideBarStockSlice.js';
import themeSlice from './slices/themeSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stockData: stockDataReducer,
    sideBarStocks: sideBarStockSlice,
    theme: themeSlice
  }
});

export default store;
