import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <footer
      className={`bg-light border-top p-3 fixed-bottom ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
    >
      <div className="container d-flex justify-content-between">
        <p className="mb-0 ">© Stock Market Dashboard</p>
        <div>
          <a href="https://www.facebook.com" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.youtube.com" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.twitter.com" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
