import { LOGIN_SUCCESS } from './actionTypes';

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userProfile');
    dispatch({ type: 'LOGOUT' });
  };
};

// Async action creators using redux-thunk
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://smd-backend-production.up.railway.app/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      }
    );

    if (response.ok) {
      // TODO we can maybe think of saving the profile to the local storage from the user, thus will save even when the browser is closed or the session is closed for the duration of the set amount of time, but we have to be careful with data, can be considered.
      const userData = await response.json();
      const profileExpiry = 60 * 60 * 1000;
      const profileWithExpiry = {
        ...userData,
        expiry: Date.now() + profileExpiry
      };
      localStorage.setItem('userProfile', JSON.stringify(profileWithExpiry));
      dispatch(loginSuccess(userData));
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error.message);
  }
};
