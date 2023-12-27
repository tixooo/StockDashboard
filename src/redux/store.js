import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/AuthProvider/AuthSlice/AuthSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
