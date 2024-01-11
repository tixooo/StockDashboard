import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  stocks: null,
  sidebarStocks: null,
  isLoading: false,
  error: null
};
export const fetchAllStockData = createAsyncThunk(
  'stocks/fetchAllStockData',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `https://smd-backend-production.up.railway.app/api/data/addStock`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
      const stockData = await response.json();
      return stockData.allStocks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStockData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStockData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stockData = action.payload;
      })
      .addCase(fetchAllStockData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = stocksSlice.actions;
export default stocksSlice.reducer;
