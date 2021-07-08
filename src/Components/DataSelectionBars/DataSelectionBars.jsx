import React, { useState } from "react";
import { DropTarget } from "react-drag-drop-container";
import "./DataSelectionBars.css";
import { Button } from "react-bootstrap";
import { businessDataContext } from "../../App";

function DataSelectionBars() {
  const [dimension, setDimension] = useState("");
  const [measurment, setMeasurment] = useState("");

  var contextData = React.useContext(businessDataContext); // selecting the global data selection context to path the draggd values from dimensions and measures
  function handleDropDimension(e) {
    setDimension(e.containerElem.innerText);
  }
  function handleDropMeasurement(e) {
    setMeasurment(e.containerElem.innerText);
  }
  function handleDimensionDelete(e) {
    setDimension("");
    let globalData = {
      measures: measurment,
      dimension: "",
    };
    contextData.setBuisnessDetails(globalData);
  }
  function handleMeasureDelete(e) {
    setMeasurment("");
    let globalData = {
      measures: "",
      dimension: dimension,
    };
    contextData.setBuisnessDetails(globalData);
  }
  React.useEffect(() => {
    //using use effect in order to make the setState to update atomically to path the data correctly and not to be late by one render.
    function fetchData() {
      let globalData = {
        measures: measurment,
        dimension: dimension,
      };
      contextData.setBuisnessDetails(globalData);
    }
    fetchData();
  }, [dimension, measurment]);

  return (
    <div className="databars">
      {/* specfying the drop area and using the targetKey props to specify where the draggables will be dropped */}

      <div className=" d-inline-block">
        <DropTarget targetKey="dimension" onHit={handleDropDimension}>
          <p className="dimension-label d-inline-block"> Dimension: </p>
          <div className="dimension d-inline-block"> {dimension}</div>
          <Button
            className="dimension-clear-btn"
            variant="outline-dark"
            onClick={handleDimensionDelete}
          >
            Clear
          </Button>
        </DropTarget>
      </div>

      <div>
        <DropTarget targetKey="measure" onHit={handleDropMeasurement}>
          <p className=" measure-label d-inline-block"> Measure: </p>
          <div className="measurement d-inline-block">{measurment}</div>
          <Button
            className="measure-clear-btn"
            variant="outline-dark"
            onClick={handleMeasureDelete}
          >
            Clear
          </Button>
        </DropTarget>
      </div>
    </div>
  );
}

export default DataSelectionBars;
