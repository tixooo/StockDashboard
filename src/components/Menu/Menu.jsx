import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileModal = ({ show, handleClose }) => {
  const user = useSelector((state) => state.auth.user);
  if (!user) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Crypto</strong>
        </p>
        <p>
          <strong>Stocks</strong>
        </p>
        <p>
          <strong>Gold</strong>
        </p>
        <p>
          <strong>Currencies</strong>
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
