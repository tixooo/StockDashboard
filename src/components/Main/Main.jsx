import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { useSelector } from 'react-redux';

export default function Main() {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`card main-card h-90 ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
    >
      <div className="card-header">
        <h4>Welcome to Our App</h4>
      </div>
      <div className="card-body">
        <p className="card-text">General information about the website</p>
        <p className="card-text">Why you should use the App</p>
        <p className="card-text">Number of registered users</p>
        <p className="card-text">Number of total transactions</p>
        <p className="card-text">Number of daily transactions</p>
        <p className="card-text">Special AI assistant (MAYBE!)</p>
        <p className="card-text">Other stuff...</p>
      </div>
    </div>
  );
}
