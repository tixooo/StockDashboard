import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainView.css';
import { MainPrivate, SidebarPrivate } from '../utils/barrelComponents.js';
import { useParams } from 'react-router-dom';

const PrivateView = () => {
  const { symbol } = useParams();
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-10 pr-2">
          <MainPrivate symbol={symbol} />
        </div>
        <div className="col-2">
          <SidebarPrivate />
        </div>
      </div>
    </div>
  );
};

export default PrivateView;
