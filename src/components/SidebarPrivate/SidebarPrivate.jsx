import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css'; // Import the CSS file

export default function SidebarPrivate() {
  return (
    <div className="card sidebar-card">
      <div className="card-header">Sidebar List of Stocks</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">My Top 5 Stocks</li>
        <li className="list-group-item">Stock 1</li>
        <li className="list-group-item">Stock 2</li>
        <li className="list-group-item">Stock 3</li>
        <li className="list-group-item">Stock 4</li>
        <li className="list-group-item">Stock 5</li>
      </ul>
    </div>
  );
}
