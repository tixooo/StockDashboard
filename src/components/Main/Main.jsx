import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
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
        </div>
      </div>
    </div>
  );
}
