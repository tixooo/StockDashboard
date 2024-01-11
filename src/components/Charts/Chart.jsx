import { candleStickOptions } from './constants.js';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStockData } from '../../redux/slices/stocksSlice.js';
import { useParams } from 'react-router-dom';

const CandleStickChart = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();
  const stockData = useSelector((state) => state.stocks.stocks);
  useEffect(() => {
    dispatch(fetchAllStockData(symbol));
  }, [dispatch, symbol]);

  const transformedData = stockData?.['Monthly Time Series']
    ? Object.entries(stockData['Monthly Time Series']).map(([date, data]) => ({
        x: date,
        y: [data['1. open'], data['2. high'], data['3. low'], data['4. close']]
      }))
    : [];
  return (
    <>
      <ReactApexChart
        type="candlestick"
        options={candleStickOptions}
        series={[{ data: transformedData }]}
      />
    </>
  );
};

export default CandleStickChart;
