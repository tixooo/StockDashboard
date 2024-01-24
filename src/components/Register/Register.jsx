import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { register as registerAction } from '../../redux/slices/AuthSlice.js';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  // TODO Maybe to make a modal for the feedback message, both error and non error
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return false;
    }
    setErrorMessage('');
    return true;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const repeatPassword = e.target.elements.repeatPassword.value;
    const email = e.target.elements.email.value;
    const fullName = e.target.elements.fullName.value;

    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    setErrorMessage('');

    if (!validateEmail(email)) {
      return;
    }

    dispatch(registerAction({ username, password, fullName, email }))
      .then(() => {
        setFeedbackMessage('Registration successful! Logging you in.');
        setTimeout(() => {
          navigate('/');
          handleClose();
        }, 2000);
      })
      .catch((error) => {
        setFeedbackMessage('Registration failed: ' + error.message);
      });
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
            {feedbackMessage && (
              <div className="feedback-message">{feedbackMessage}</div>
            )}
            <p>
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                id="fullName"
                data-testid="fullNameInput"
                data-cy="fullName"
              />
            </p>
            <p>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                data-testid="usernameInput"
                data-cy="userName"
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                data-testid="passwordInput"
                data-cy="password"
              />
            </p>
            <p>
              <label htmlFor="repeatPassword">Repeat password</label>
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat password"
                id="repeatPassword"
                data-testid="repeatPasswordInput"
                data-cy="repeatPassword"
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                data-testid="emailInput"

                data-cy="email"

                onChange={(e) => validateEmail(e.target.value)}
      
              />
            </p>

            <button
              type="submit"
              className="btn btn-primary"
              data-testid="registerBtn"
              data-cy="register"
            >
              Register
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} data-cy="closeBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
