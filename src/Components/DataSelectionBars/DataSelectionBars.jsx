import React,{useState} from "react"
import {  DropTarget } from 'react-drag-drop-container';
import "./DataSelectionBars.css";
import { Button } from "react-bootstrap";
function DataSelectionBars(){
    const [dimension,setDimension] = useState("");
    const [measurment,setMeasurment] = useState("");

    function handleDropDimension(e){
      setDimension(e.containerElem.innerText);
    }
    function handleDropMeasurement(e){
      setMeasurment(e.containerElem.innerText);
    }
    function handleDimensionDelete(e){
      setDimension("");

    }
    function handleMeasureDelete(e){
      setMeasurment("");

    }

    return (

      <div className="databars">
      {/* specfying the drop area and using the targetKey props to specify where the draggables will be dropped */}
      <div className="dimension-group">
        <DropTarget targetKey="dimension"  onHit  = {handleDropDimension}  >
        <label>Dimension
        <div className="dimension"> {dimension}</div>
        <Button variant="outline-dark" onClick={handleDimensionDelete}>Clear</Button>
        </label>
        
    </DropTarget>
    </div>
    <div>
    <DropTarget targetKey="measure"  onHit  = {handleDropMeasurement}  >
        <label>Measure
        <div className="measurement">{measurment}</div>
        <Button variant="outline-dark" onClick={handleMeasureDelete}>Clear</Button>
        </label>
        
    </DropTarget>
    </div>
    </div>
    );
}

export default DataSelectionBars;