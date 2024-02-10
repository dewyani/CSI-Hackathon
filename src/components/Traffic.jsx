import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Traffic = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [options] = useState({
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
    labels: ['RTO', 'BMC', 'Sebi', 'Income tax'] // Set labels here
  });

  const appendData = () => {
    const arr = [...series];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(arr);
  };

  const removeData = () => {
    if (series.length === 1) return;
    const arr = [...series];
    arr.pop();
    setSeries(arr);
  };

  const randomize = () => {
    setSeries(series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <Chart options={options} series={series} type="donut" width={380} />
          </div>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Traffic;
