import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { login } from '../AuthProvider/AuthSlice/AuthSlice.js';
import { Modal, Button } from 'react-bootstrap';

const SignIn = ({ show, handleClose }) => {
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
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
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

export default SignIn;
