import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../AuthProvider/AuthSlice/AuthSlice.js';
import Profile from '../Modals/Profile/Profile.jsx';
import SignIn from '../Login/Login.jsx';
import './Navbar.css';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user;
  const dispatch = useDispatch();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleProfileClick = () => {
    setShowProfileModal(true);
  };
  const handleProfileLogIn = () => {
    setShowLoginModal(true);
  };
  const handleCloseProfileLogIn = () => {
    setShowLoginModal(false);
  };
  const handleCloseModal = () => {
    setShowProfileModal(false);
  };
  const handleLogout = () => {
    dispatch(logout());
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    {/* <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink> */}
                    <button
                      onClick={handleProfileClick}
                      className="btn btn-link nav-link"
                    >
                      Profile
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
