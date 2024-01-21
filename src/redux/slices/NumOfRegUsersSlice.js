import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserCount = createAsyncThunk('users/fetchCount', async () => {
  const response = await fetch(
    'https://smd-backend-production.up.railway.app/api/auth//count'
  );
  const data = await response.json();
  return data.count;
});
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    count: 0,
    loading: false,
    error: null
  },
  reducers: {
    // Reducers if any
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserCount.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      })
      .addCase(fetchUserCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;
