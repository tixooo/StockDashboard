import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const logout = () => ({
  type: LOGOUT
});

// Async action creators using redux-thunk
export const login =
  (username, password, fullName, email) => async (dispatch) => {
    try {
      const response = await fetch(
        'https://smd-backend-nu2a.onrender.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password, fullName, email })
        }
      );

      if (response.ok) {
        const userData = await response.json();
        dispatch(loginSuccess(userData));
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

// To create an async action for registration!
