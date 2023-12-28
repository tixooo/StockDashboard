import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../AuthProvider/AuthSlice/AuthSlice.js';
import { Modal, Button } from 'react-bootstrap';

const SignIn = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    const fullName = e.target.elements.fullName.value;
    dispatch(loginSuccess({ username, password, fullName, email }));
    setShowModal(true);
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <button onClick={() => setShowModal(true)}>Login</button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
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
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;
