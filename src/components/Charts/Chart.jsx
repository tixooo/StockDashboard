import { candleStickOptions } from './constants.js';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStockData } from '../../redux/slices/stocksSlice.js';
import newData from './data.js';

const CandleStickChart = () => {
  // const dispatch = useDispatch();
  const { symbol } = useParams();
  const stockData = useSelector((state) => state.stockData.data[symbol]);

  const apiDataTransformed =
    stockData && typeof stockData === 'object'
      ? [
          {
            x: new Date(stockData.t * 1000),
            y: [stockData.o, stockData.h, stockData.l, stockData.c]
          }
        ]
      : [];

  const newDataTransformed = newData.map((data) => ({
    x: new Date(data.t * 1000),
    y: [data.o, data.h, data.l, data.c]
  }));

  const combinedData = apiDataTransformed.concat(newDataTransformed);
  return (
    <>
      <ReactApexChart
        type="candlestick"
        options={candleStickOptions}
        series={[{ data: combinedData }]}
      />
    </>
  );
};

export default CandleStickChart;
