import { candleStickOptions } from './constants.js';
import ReactApexChart from 'react-apexcharts';
import React from 'react';

const data = [
  {
    x: '2023-12-11',
    y: ['162.6800', '163.6500', '161.9500', '163.5100']
  },
  {
    x: '2023-12-08',
    y: ['160.0000', '162.0400', '160.0000', '161.9600']
  },
  {
    x: '2023-12-07',
    y: ['161.0000', '161.4650', '159.9700', '160.2200']
  },
  {
    x: '2023-12-06',
    y: ['161.5900', '162.3550', '160.0100', '160.2800']
  }
];

const CandleStickChart = () => {
  return (
    <>
      <ReactApexChart
        type="candlestick"
        options={candleStickOptions}
        // series={[{ data: 'filtered data here' }]}
        series={[{ data: data }]}
      />
    </>
  );
};

export default CandleStickChart;
