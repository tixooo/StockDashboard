import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPrivate.css';
import Chart from '../Charts/Chart.jsx';
export default function MainPrivate() {
  return (
    <div className="card main-card h-90">
      <div className="card-header">
        <h4>Graphics of Stocks </h4>
      </div>
      <div className="card-body">
        <Chart />
      </div>
    </div>
  );
}
