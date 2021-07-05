import React, { useState, useEffect } from "react";
import "./DataColumn.css";
import Spinner from "react-bootstrap/Spinner";
import getColumnData from "../../Actions/columnActions";
import ColumnDataElement from "../ColumnDataElement/ColumnDataElement";
import { Droppable } from "react-beautiful-dnd";

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
        <Droppable droppableId="col-1">
          {(provided) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dataTypes.map((dataElement, index) => {
                return (
                  <ColumnDataElement
                    columnDataName={dataElement.name}
                    columnDataFunction={dataElement.function}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
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
