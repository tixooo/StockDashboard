import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register as registerAction } from '../AuthProvider/AuthSlice/AuthSlice.js';

const SignUp = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const repeatPassword = e.target.elements.repeatPassword.value;
    const email = e.target.elements.email.value;
    const fullName = e.target.elements.fullName.value;

    // Check if passwords match
    if (password !== repeatPassword) {
      // to create a custom modal for the error
      setErrorMessage('Passwords do not match');
      return; // Stop the form submission
    }
    // Clear error message if passwords match
    setErrorMessage('');

    // Proceed with the registration
    dispatch(registerAction({ username, password, fullName, email }));
  };
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <label htmlFor="fullName">Full name</label>
          <input type="text" name="fullName" placeholder="Full name" />

          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />

          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
          />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
