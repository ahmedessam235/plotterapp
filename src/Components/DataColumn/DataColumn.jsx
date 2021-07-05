import React, { useState, useEffect } from "react";
import "./DataColumn.css";
import Spinner from "react-bootstrap/Spinner";
import getColumnData from "../../Actions/columnActions";
import ColumnDataElement from "../ColumnDataElement/ColumnDataElement";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


function DataColumn() {
  const [dataTypes, renderDatatypes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const requestedColumnData = await getColumnData();
      renderDatatypes(requestedColumnData);
    }
    fetchData();
  }, []);

  if (dataTypes) {
    //waiting till the data is feteched from the API

    return (
      
      <div className="data-table">
        <h4 className="headline">Columns</h4>
        
              {dataTypes.map((dataElement, index) => {
                return (
                  <ColumnDataElement
                    columnDataName={dataElement.name}
                    columnDataFunction={dataElement.function}
                    index={index}
                  />
                );
              })}
              
           
            </div>
          
     
    );
  } else {
    //loading animation bootstrap "spinner" until data is fet
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}

export default DataColumn;
