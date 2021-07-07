import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Plotter.css";
import { getBusinessData } from "../../Actions/columnActions";
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

function LineChart(props) {
  const [buisnessData, renderBusinessData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const requestedColumnData = await getBusinessData(props.data); //get the graph data
      renderBusinessData(requestedColumnData);
    }
    fetchData();
  }, [props.data]); //adding effect on the passed dimensions and measures to get the latest state


  if (buisnessData) {
    const data = {
      labels: buisnessData[0].values,
      datasets: [
        {
          label: buisnessData[1].name + " VS " + buisnessData[0].name,
          data: buisnessData[1].values,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    return (
      <div className="plotter-graph">
        <div className="header">
          <h1 className="title">Line Chart</h1>
          <div className="links"></div>
        </div>
        <Line data={data} options={options} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default LineChart;
