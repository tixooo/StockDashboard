import dayjs from 'dayjs';

export const candleStickOptions = {
  chart: {
    height: 300,
    type: 'candlestick'
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  anotations: {
    xaxis: [
      {
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#',
            background: '#00E396'
          },
          orientation: 'horizontal',
          offsetY: 7,
          text: 'Annotation Test'
        }
      }
    ]
  },
  tooltip: {
    enabled: true
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: function (val) {
        return dayjs(val).format('MMM DD HH:mm');
      },
      style: {
        fontSize: '12px',
        color: '#fff',
        background: '#00E396'
      }
    }
  },
  yaxis: {
    tooltip: {
      enable: true
    }
  }
};
