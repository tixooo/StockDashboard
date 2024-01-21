import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Menu.css';

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
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
      </div>
      <Modal.Body
        className={`card menu-card ${
          isDarkMode ? 'bg-dark body-dark' : 'bg-light body-light'
        }`}
      >
        <p>
          <NavLink className="nav-link" to="/stocks">
            <Button
              data-testid="testCrypto"
              onClick={handleClose}
              className={`card menu-card ${
                isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
              }`}
            >
              Crypto
            </Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button
              onClick={handleClose}
              className={`card menu-card ${
                isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
              }`}
            >
              Stocks
            </Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button
              onClick={handleClose}
              className={`card menu-card ${
                isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
              }`}
            >
              Gold
            </Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/stocks">
            <Button
              onClick={handleClose}
              className={`card menu-card ${
                isDarkMode ? 'bg-dark button-dark' : 'bg-light button-light'
              }`}
            >
              Currencies
            </Button>
          </NavLink>
        </p>
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
