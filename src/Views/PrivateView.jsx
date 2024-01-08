import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainView.css';
import { MainPrivate, SidebarPrivate } from '../utils/barrelComponents.js';

const PrivateView = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-10 pr-2">
          <MainPrivate />
        </div>
        <div className="col-2">
          <SidebarPrivate />
        </div>
      </div>
    </div>
  );
};

export default PrivateView;
