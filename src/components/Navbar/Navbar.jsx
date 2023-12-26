import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import '../../tailwind.css'
export default function Navbar() {
    return (
        <>
            <div className="logo">
                Logo to be implemented (auto generate something with AI)
            </div>
            <nav className="bg-blue-500 text-white p-4">
                <div className="navigation-menu">
                    <NavLink to="/" className="wrapper-logo"></NavLink>
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
                            <NavLink to="register" className="nav-link">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
