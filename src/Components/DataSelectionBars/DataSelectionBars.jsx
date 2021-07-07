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
      <div className="dimension-group">
        <DropTarget targetKey="dimension" onHit={handleDropDimension}>
          <label>
            Dimension
            <div className="dimension"> {dimension}</div>
            <Button variant="outline-dark" onClick={handleDimensionDelete}>
              Clear
            </Button>
          </label>
        </DropTarget>
      </div>
      <div>
        <DropTarget targetKey="measure" onHit={handleDropMeasurement}>
          <label>
            Measure
            <div className="measurement">{measurment}</div>
            <Button variant="outline-dark" onClick={handleMeasureDelete}>
              Clear
            </Button>
          </label>
        </DropTarget>
      </div>
    </div>
  );
}

export default DataSelectionBars;
