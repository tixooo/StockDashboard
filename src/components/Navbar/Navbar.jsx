import { NavLink } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
