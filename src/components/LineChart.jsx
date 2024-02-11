
import { Line } from 'react-chartjs-2';
import Chart from 'react-apexcharts';
import React , {Component, useState} from 'react';

const LineChart=()=>{ 
  const [options, setObject] =useState({
    chart: {
    id: 'apexchart-example',
    stacked: true,
    padding: {
      left: 10, // Add left padding
      right: 10, // Add right padding
      top: 10, // Add top padding
      bottom: 10 // Add bottom padding
    }
  },
  xaxis: {
    categories: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9"]
  }
  })

  const [series, setSeries] =useState([{
    
      name: 'Complaints',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]


  },
{
  name: 'Resolved Complaints',
      data: [12, 24, 17, 43, 32, 56, 43, 65, 93]
}])   
  
    return (
      <Chart options={options} series={series} type="bar" width={800} height={500} />
    )
  
}

export default LineChart
