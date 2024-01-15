import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPrivate.css';
import Chart from '../Charts/Chart.jsx';
import { useSelector } from 'react-redux';

export default function MainPrivate() {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`card main-card h-90 ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
    >
      <div className="card-header">
        <h4>Graphics of Stocks </h4>
      </div>
      <div className="card-body">
        <Chart />
      </div>
    </div>
  );
}
