import React from 'react';
import { Main, Sidebar } from '../utils/barrelComponents.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainView.css';

let MainView = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-10 pr-2">
          <Main />
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainView;
