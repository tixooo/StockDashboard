import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  stock: [],
  sidebarStocks: [],
  isLoading: false,
  error: null
};
export const sideBarStocks = createAsyncThunk('stocks', async (_, thunkAPI) => {
  try {
    const response = await fetch(
      `https://smd-backend-production.up.railway.app/api/data/stocks`,
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
});

const sideBarStocksSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sideBarStocks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sideBarStocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stock = action.payload;
      })
      .addCase(sideBarStocks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = sideBarStocksSlice.actions;
export default sideBarStocksSlice.reducer;
