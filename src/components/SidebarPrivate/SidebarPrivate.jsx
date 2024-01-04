import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css';
import { useSelector, useDispatch } from 'react-redux';
import { addStocks } from '../../redux/slices/stocksSlice.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function SidebarPrivate() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  useEffect(() => {
    dispatch(addStocks({}));
  }, [dispatch]);
  console.log(stocks);
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
                <NavLink className="nav-link">
                  <Button>({stock.symbol})</Button> {stock.name}
                </NavLink>
              </p>
              <p> Stock Price {stock.price}</p>
              <p> Stock Change {stock.change}</p>
              <p> Stock Change % {stock.changePercent}</p>
              <p> Stock Volume {stock.volume}</p>
              <p> Stock Market Cap {stock.marketCap}</p>
              <p> Stock Dividend Yield {stock.dividendYield}</p>
              <p> Stock EPS {stock.eps}</p>
              <p> Stock PE {stock.pe}</p>
              <p> Stock Week 52 High {stock.week52high}</p>
              <p> Stock Week 52 Low {stock.week52low}</p>
              <p> Stock YTD Change {stock.ytdChange}</p>
            </li>
          ))
        ) : (
          <li className="list-group-item">No stocks available</li>
        )}
      </ul>
    </div>
  );
}
