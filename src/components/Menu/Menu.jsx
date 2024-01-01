import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
          <NavLink className="nav-link" to="/stocks">
            <Button onClick={handleClose}>Crypto</Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button onClick={handleClose}>Stocks</Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button onClick={handleClose}>Gold</Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button onClick={handleClose}>Currencies</Button>
          </NavLink>
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
