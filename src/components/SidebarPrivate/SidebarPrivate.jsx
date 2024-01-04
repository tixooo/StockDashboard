import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarPrivate.css';
import { useSelector, useDispatch } from 'react-redux';
import { addStocks } from '../../redux/slices/stocksSlice.js';

export default function SidebarPrivate() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  useEffect(() => {
    dispatch(addStocks({}));
  }, [dispatch]);
  console.log(stocks);
  return (
    <>
      <div className="card sidebar-card">
        <div className="card-header">Sidebar List of Stocks</div>
        <ul className="list-group list-group-flush">
          {stocks && stocks.length > 0 ? (
            stocks.map((stock, index) => (
              <li key={index} className="list-group-item">
                {stock.name} - ({stock.symbol})
              </li>
            ))
          ) : (
            <li className="list-group-item">No stocks available</li>
          )}
        </ul>
      </div>
      );
    </>
  );
}
