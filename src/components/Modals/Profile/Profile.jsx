import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileModal = ({ show, handleClose }) => {
  const user = useSelector((state) => state.auth.user);
  const { isDarkMode } = useSelector((state) => state.theme);
  if (!user) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <div
        className={`card menu-card ${
          isDarkMode ? 'bg-dark header-dark' : 'bg-light header-light'
        }`}
      >
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
      </div>
      <Modal.Body
        className={`card menu-card ${
          isDarkMode ? 'bg-dark body-dark' : 'bg-light body-light'
        }`}
      >
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Full Name:</strong> {user.fullName}
        </p>
        //to add the password and to make it changeable
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
  );
};

export default ProfileModal;
