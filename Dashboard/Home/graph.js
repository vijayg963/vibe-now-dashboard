import React from "react";
import ReactDOM from "react-dom";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const data = {
    labels: [
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
      "24-Feb-22",
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    // lineTension: 1,
    datasets: [
      // {
      //   label: "HSN",
      //   fill: false,
      //   borderColor: "rgba(255, 0, 0, 0.3)",
      //   borderWidth: 1,
      //   pointRadius: 2,
      //   data: [65, 59, 80, 81, 56, 55, 40]
      // },
      // {
      //   label: "CPX",
      //   fill: false,
      //   borderColor: "rgba(0, 255, 0, 0.3)",
      //   borderWidth: 1,
      //   pointRadius: 2,
      //   data: [70, 32, 45, 65, 87, 92, 99]
      // },
      {
        label: "",
        fill: true,
        backgroundColor:'rgba(236,157,80,0.14)',
        borderColor: "orange",
        borderWidth: 1.5,
        pointRadius: 0,
        data: [
          "20000",
          "30000",
          "38000",
          "59000",
          "65000",
          "53000",
          // "67000",
          "78000",
          "82000",
          "94000",
          "84000",
        ],
      },
    ],
  };

  var options = {
    legend: {
      position: "right",
      labels: {
        // boxWidth: 10
        boxWidth: 0,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true },
        },
      ],
    },
  };

  return (
    <div className="Graph">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
