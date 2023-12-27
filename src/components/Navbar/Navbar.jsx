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
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="bg-primary-subtle">
              Logo to be implemented (auto generate something with AI)
            </div>
          </div>
          <div className="col">
            <div className="navigation-menu bg-info-subtle">
              <NavLink to="/" className="wrapper-logo"></NavLink>
              <ul className="list">
                <li>
                  <NavLink to="/" className="badge bg-primary">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="info" className="badge bg-primary">
                    Info
                  </NavLink>
                </li>
                <li>
                  <NavLink to="forum" className="badge bg-primary">
                    Forum
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <>
                    <li>
                      <button
                        onClick={handleProfileClick}
                        className="badge bg-primary"
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="badge bg-primary"
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="login" className="badge bg-primary">
                        Log In
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="register" className="badge bg-primary">
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
