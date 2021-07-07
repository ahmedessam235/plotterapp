import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Plotter.css";
import { getBusinessData } from "../../Actions/columnActions";
import Spinner from "react-bootstrap/Spinner";

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
          backgroundColor: "#343a40",
          borderColor: "#343a40",
        },
      ],
    };
    return (
      <div className="plotter-graph">
        <div className="header">
          <div className="links"></div>
        </div>
        <Line data={data} options={options} />
      </div>
    );
  } else {
    return (
      <div className="plotter-graph-loading">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <p>Please drag and drop data into the respective bars</p>
      </div>
    );
  }
}

export default LineChart;
