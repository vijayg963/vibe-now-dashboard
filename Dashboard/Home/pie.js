import React from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
    var options = {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10
          }
        },
        scales: {
          xAxes: [
            {
              ticks: { display: false }
            }
          ]
        }
      };

    const pieData = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        'rgba(255,0,0, 1)',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
    return (
      <Pie data={pieData} options={options} />
    )
  }
  
  export default PieChart;