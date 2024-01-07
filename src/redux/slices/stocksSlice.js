import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  stocks: null,
  sidebarStocks: null,
  isLoading: false,
  error: null
};
export const addStocks = createAsyncThunk(
  'stocks/addStocks',
  async (symbol, thunkAPI) => {
    try {
      const response = await fetch(
        `https://smd-backend-production.up.railway.app/api/data/addStock?symbol=${symbol}`,
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
      .addCase(addStocks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addStocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stocks = action.payload;
      })
      .addCase(addStocks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = stocksSlice.actions;
export default stocksSlice.reducer;
