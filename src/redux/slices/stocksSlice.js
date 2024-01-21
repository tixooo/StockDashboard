import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStockData = createAsyncThunk(
  'stockData/fetchStockData',
  async (symbol, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://smd-backend-production.up.railway.app/api/data/addStock?symbol=${symbol}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const stockDataSlice = createSlice({
  name: 'stockData',
  initialState: {
    data: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.meta.arg] = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default stockDataSlice.reducer;
