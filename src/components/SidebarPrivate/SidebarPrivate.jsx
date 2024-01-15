import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css';
import { useSelector, useDispatch } from 'react-redux';
import { sideBarStocks } from '../../redux/slices/sideBarStockSlice.js';
import { fetchAllStockData } from '../../redux/slices/stocksSlice.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function SidebarPrivate() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.sideBarStocks.stock);
  const stockData = useSelector((state) => state.stocks.stockData);
  useEffect(() => {
    dispatch(sideBarStocks({}));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllStockData());
    console.log(stockData);
  }, [dispatch]);
  return (
    <div
      className={`card sidebar-card ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
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
                <p> Stock Price: </p>
                <p> Stock High: </p>
                <p> Stock Low: </p>
                <p> Stock Close: </p>
                <p> Stock Volume: </p>
              </p>
            </li>
          ))
        ) : (
          <li className="list-group-item">No stocks available</li>
        )}
      </ul>
    </div>
  );
}
