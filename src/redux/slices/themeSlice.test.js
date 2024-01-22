import themeReducer, { setDarkMode } from './themeSlice.js';

describe('themeSlice', () => {
  it('should handle setDarkMode action', () => {
    const initialState = { isDarkMode: false };
    const newState = themeReducer(initialState, setDarkMode(true));

    expect(newState.isDarkMode).toBe(true);
  });

  it('should handle setDarkMode action with false payload', () => {
    const initialState = { isDarkMode: true };
    const newState = themeReducer(initialState, setDarkMode(false));

    expect(newState.isDarkMode).toBe(false);
  });

  it('should have the correct initial state', () => {
    const initialState = { isDarkMode: false };
    const resultState = themeReducer(undefined, {});

    expect(resultState).toEqual(initialState);
  });
});
