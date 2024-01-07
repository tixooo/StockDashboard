import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css';
import { useSelector, useDispatch } from 'react-redux';
import { sideBarStocks } from '../../redux/slices/sideBarStockSlice.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function SidebarPrivate() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.sideBarStocks.stock);
  useEffect(() => {
    dispatch(sideBarStocks({}));
  }, [dispatch]);
  return (
    <div
      className="card sidebar-card"
      style={{ overflowY: 'scroll', height: '830px' }}
    >
      <div className="card-header">Sidebar List of Stocks</div>
      <ul className="list-group list-group-flush">
        {stocks && stocks.length > 0 ? (
          stocks.map((stock, index) => (
            <li key={index} className="list-group-item">
              <p>
                <NavLink className="nav-link" to={`/stock/${stock.symbol}`}>
                  <Button>({stock.symbol})</Button> {stock.name}
                </NavLink>
              </p>
              <p> Stock Price {stock.open}</p>
              <p> Stock high {stock.high}</p>
              <p> Stock low {stock.low}</p>
              <p> Stock close {stock.close}</p>
              <p> Stock volume {stock.volume}</p>
            </li>
          ))
        ) : (
          <li className="list-group-item">No stocks available</li>
        )}
      </ul>
    </div>
  );
}
