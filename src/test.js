import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/AuthSlice.js';
import Profile from '../Modals/Profile/Profile.jsx';
import SignIn from '../Login/Login.jsx';
import SignUp from '../Register/Register.jsx';
import Menu from '../Menu/Menu.jsx';
import './Navbar.css';
import { Toggle } from '../Dark mode/ToggleButton.js';
import { setDarkMode } from '../../redux/slices/themeSlice.js';
import '../../App.css';

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user;
  const dispatch = useDispatch();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);

  const { isDarkMode } = useSelector((state) => state.theme);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };
  const handleProfileClick = () => {
    setShowProfileModal(true);
  };
  const handleProfileLogIn = () => {
    setShowLoginModal(true);
  };
  const handleMenu = () => {
    setShowMenuModal(true);
  };
  const handleCloseRegister = () => {
    setShowRegisterModal(false);
  };
  const handleCloseProfileLogIn = () => {
    setShowLoginModal(false);
  };
  const handleCloseModal = () => {
    setShowProfileModal(false);
  };
  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleDarkModeToggle = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  return (
    <>
      <Profile
        user={user}
        show={showProfileModal}
        handleClose={handleCloseModal}
      />
      <SignIn
        user={user}
        show={showLoginModal}
        handleClose={handleCloseProfileLogIn}
      />
      <SignUp
        user={user}
        show={showRegisterModal}
        handleClose={handleCloseRegister}
      />

      <Menu
        user={user}
        show={showMenuModal}
        handleClose={handleCloseMenuModal}
      />
      <nav
        className={`navbar navbar-expand-lg ${
          isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
        }`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://i.imgur.com/zfVk9OR.png"
              alt="Logo"
              style={{ height: '50px' }}
            />
          </NavLink>
          <div className="d-flex justify-content-end w-100">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <Toggle
                  label="Dark Mode"
                  toggled={isDarkMode}
                  onClick={handleDarkModeToggle}
                />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://smdashboard.forumotion.com/"
                >
                  Forum
                </a>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <button
                      onClick={handleMenu}
                      className="btn btn-link nav-link"
                    >
                      Menu
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleProfileClick}
                      className="btn btn-link nav-link"
                    >
                      Profile
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-link nav-link"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      onClick={handleProfileLogIn}
                      className="btn btn-link nav-link"
                    >
                      Log In
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleRegisterClick}
                      className="btn btn-link nav-link"
                    >
                      Register
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
