import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, fullName, email }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://smd-backend-nu2a.onrender.com/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, fullName, email })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password, fullName, email }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://smd-backend-nu2a.onrender.com/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, fullName, email })
        }
      );

      if (!response.ok) throw new Error('Registration failed');
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
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
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
