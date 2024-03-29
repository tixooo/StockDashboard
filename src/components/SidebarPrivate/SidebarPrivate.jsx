import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css';
import { useSelector, useDispatch } from 'react-redux';
import { sideBarStocks } from '../../redux/slices/sideBarStockSlice.js';
import { fetchStockData } from '../../redux/slices/stocksSlice.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function SidebarPrivate() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.sideBarStocks.stock);
  const stockData = useSelector((state) => state.stockData);

  useEffect(() => {
    const handleStocks = async () => {
      await dispatch(sideBarStocks({}));
    };
    handleStocks();
  }, [dispatch]);

  useEffect(() => {
    if (stocks.length !== 0) {
      stocks.forEach((stock) => {
        if (!stockData.data[stock.symbol]) {
          dispatch(fetchStockData(stock.symbol));
        }
      });
    }
  }, [stocks, dispatch, stockData.data]);
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
              <NavLink className="nav-link" to={`/stock/${stock.symbol}`}>
                <Button>({stock.symbol})</Button> {stock.name}
              </NavLink>
              {stockData && stockData.data[stock.symbol] ? (
                <>
                  <p>Stock Price: {stockData.data[stock.symbol]['c']}</p>
                  <p>Stock High: {stockData.data[stock.symbol]['h']}</p>
                  <p>Stock Low: {stockData.data[stock.symbol]['l']}</p>
                  <p>Stock Close: {stockData.data[stock.symbol]['pc']}</p>
                  <p>Percent Change: {stockData.data[stock.symbol]['dp']}</p>
                </>
              ) : (
                <p>Loading stock data...</p>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item">No stocks available</li>
        )}
      </ul>
    </div>
  );
}
