import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { register as registerAction } from '../AuthProvider/AuthSlice/AuthSlice.js';
import { Modal, Button } from 'react-bootstrap';

const SignUp = ({ show, handleClose }) => {
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
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <p>
              <label htmlFor="fullName">Full name</label>
              <input type="text" name="fullName" placeholder="Full name" />
            </p>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </p>
            <p>
              <label htmlFor="repeatPassword">Repeat password</label>
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat password"
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </p>

            <Button
              type="submit"
              className="btn btn-primary"
              onClick={handleClose}
            >
              Register
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
