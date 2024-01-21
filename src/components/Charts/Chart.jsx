import { candleStickOptions } from './constants.js';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CandleStickChart = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();
  const stockData = useSelector((state) => state.stockData);

  const transformedData = stockData
    ? [
        {
          x: stockData.t * 1000,
          y: [stockData.o, stockData.h, stockData.l, stockData.c]
        }
      ]
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
