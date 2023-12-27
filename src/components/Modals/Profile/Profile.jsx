import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileModal = ({ show, handleClose }) => {
  const user = useSelector((state) => state.auth.user);
  if (!user) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Full Name:</strong> {user.fullName}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
