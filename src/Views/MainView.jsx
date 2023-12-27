import React from 'react';
import { Main, Sidebar } from '../utils/barrelComponents.js';
import 'bootstrap/dist/css/bootstrap.min.css';

let MainView = () => {
  return (
    <div className="container-fluid px-4 my-4">
      {' '}
      {/* Added padding and margin */}
      <div className="row">
        <div className="col-11">
          <Main />
        </div>
        <div className="col-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainView;
