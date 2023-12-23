/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import './Navbar.css'
import React from 'react';
export default function Navbar() {
    return (
        <>
            <div>Logo to be implemented (auto generate something with AI)</div>
            <nav className="navigation">
                <div className="navigation-menu">
                    <NavLink to="/" className="wrapper-logo">
                    </NavLink>
                    <ul className="list">
                        <li>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="info" className="nav-link">
                                Info
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="forum" className="nav-link">
                                Forum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="login" className="nav-link">
                                Log In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="signup" className="nav-link">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
