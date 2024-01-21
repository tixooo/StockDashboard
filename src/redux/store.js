import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import stockDataReducer from './slices/stocksSlice.js';
import sideBarStockSlice from './slices/sideBarStockSlice.js';
import themeSlice from './slices/themeSlice.js';
import usersReducer from './slices/NumOfRegUsersSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    stockData: stockDataReducer,
    sideBarStocks: sideBarStockSlice,
    theme: themeSlice
  }
});

export default store;
