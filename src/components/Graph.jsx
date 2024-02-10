import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Graph = () => {
  const [series, setSeries] = useState([
    {
      name: 'RTO',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'BMC',
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
        name: 'Sebi',
        data: [43, 25, 36, 49, 15, 30, 56]
    },
    {
        name: 'Income Tax',
        data: [20, 11, 30, 12, 56, 30, 39]
    }
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T12:30:00.000Z", "2018-09-19T16:30:00.000Z", "2018-09-19T20:30:00.000Z", "2018-09-20T00:30:00.000Z"]

    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="area" width={800} height={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Graph;
