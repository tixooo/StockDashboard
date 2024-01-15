import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false
};

export const themeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    }
  }
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
