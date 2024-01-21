import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null
};
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://smd-backend-production.up.railway.app/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
      const resData = await response.json();
      return resData.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password, fullName, email }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://smd-backend-production.up.railway.app/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, fullName, email })
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
      const userData = await response.json();
      thunkAPI.dispatch(login({ username, password }));
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        // Set the user data on successful login
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        // Set the user data on successful registration
        state.user = action.payload;
        state.error = null;
      })
      .addMatcher(
        // Handle any rejected actions if you have them
        (action) => action.type.endsWith('rejected'),
        (state, action) => {
          state.error = action.error.message;
        }
      );
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
