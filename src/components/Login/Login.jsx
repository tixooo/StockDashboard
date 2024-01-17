import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/AuthSlice.js';
import { Modal, Button } from 'react-bootstrap';

const SignIn = ({ show, handleClose }) => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    dispatch(login({ username, password }));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div
          className={`card menu-card ${
            isDarkMode ? 'bg-dark header-dark' : 'bg-light header-light'
          }`}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body
          className={`card menu-card ${
            isDarkMode ? 'bg-dark footer-dark' : 'bg-light footer-light'
          }`}
        >
          <form onSubmit={handleFormSubmit}>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              /*className={`card menu-card ${
                isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
              }`}*/
            >
              Login
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer
          className={`card menu-card ${
            isDarkMode ? 'bg-dark footer-dark' : 'bg-light footer-light'
          }`}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            className={`card menu-card ${
              isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
            }`}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignIn;
