import { NavLink } from "react-router-dom";
import Logo from './../../assets/images/logo.png';
import './Navbar.css'
export default function Navbar() {
    return (
        <nav className="navigation">
            <div className="navigation-menu">
                <NavLink to="/" className="wrapper-logo">
                    <img className="logo" src={Logo} alt="Logo" />
                </NavLink>

                <ul className="list">
                    <li>
                        <NavLink to="home" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about" className="nav-link">About</NavLink>
                    </li>
                    <li>
                        {user === null && <NavLink to="login" className="nav-link">Log In</NavLink>}
                    </li>
                    <li>
                        {user === null && <NavLink to="signup" className="nav-link">Sign Up</NavLink>}
                    </li>
                    <li>
                        {user !== null && <NavLink to="/" className="nav-link" onClick={onLogout}>Log Out</NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}