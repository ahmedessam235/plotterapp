import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { businessDataContext } from "../../App";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function LineChart() {
  var contextData = React.useContext(businessDataContext); // selecting the global data selection context to path the draggd values from dimensions and measures

  // useEffect(() => {
  //   async function fetchData() {
  //   // console.log(contextData,"from plotter");

  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="header">
        <h1 className="title">Line Chart</h1>
        <div className="links"></div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
