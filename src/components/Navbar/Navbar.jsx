import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../AuthProvider/AuthSlice/AuthSlice.js';
import Profile from '../Modals/Profile/Profile.jsx';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user;
  const dispatch = useDispatch();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const handleProfileClick = () => {
    setShowProfileModal(true);
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Logo Here
          </NavLink>
          <div className="d-flex justify-content-end w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/info">
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/forum">
                  Forum
                </NavLink>
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
                    <NavLink className="nav-link" to="/login">
                      Log In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
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
