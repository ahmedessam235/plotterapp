import React from "react";
import { Draggable } from 'react-beautiful-dnd'

function ColumnDataElement(props) {


  return (

<Draggable draggableId={props.columnDataName} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.columnDataName}
        </div>
      )}
    </Draggable>
  );
}

export default ColumnDataElement;
