import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { fetchUserCount } from './NumOfRegUsersSlice.js';

describe('usersSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { users: usersReducer } });
  });

  test('should handle fetchUserCount pending action', () => {
    store.dispatch(fetchUserCount.pending());

    const state = store.getState().users;
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  test('should handle fetchUserCount fulfilled action', () => {
    const countData = 10;
    store.dispatch(fetchUserCount.fulfilled(countData));

    const state = store.getState().users;
    expect(state.loading).toBe(false);
    expect(state.count).toBe(countData);
    expect(state.error).toBeNull();
  });

  test('should handle fetchUserCount rejected action', () => {
    const errorMessage = 'Failed to fetch user count';
    store.dispatch(fetchUserCount.rejected(new Error(errorMessage)));

    const state = store.getState().users;
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });
});
