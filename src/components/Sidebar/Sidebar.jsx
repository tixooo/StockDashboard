import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Import the CSS file

export default function Sidebar() {
  return (
    <div className="card sidebar-card">
      <div className="card-header">Sidebar</div>
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
