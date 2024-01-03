import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div className="container my-5 about-page">
      <div className="row mb-4">
        <div className="col-md-6">
          <img
            src="https://i.imgur.com/zfVk9OR.png"
            alt="Logo"
            className="img-fluid" // Responsive
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="about-title">About Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                Empowering investors with accurate and accessible stock and
                crypto information.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">What We Offer</h3>
              <p className="card-text">
                Real-time data, graphs, and analysis for the informed investor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Why Choose Us</h3>
              <p className="card-text">
                A commitment to accuracy and usability in financial market
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
