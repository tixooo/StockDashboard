import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { useSelector } from 'react-redux';

export default function Sidebar() {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`card sidebar-card ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
    >
      <div className="card-header" data-testid="testElement">
        Sidebar
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Top 10 most purchased in the last 7 days
        </li>
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </div>
  );
}
