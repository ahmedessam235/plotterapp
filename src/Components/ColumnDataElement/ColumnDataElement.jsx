import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';


function ColumnDataElement(props) {


  return (


        <div
        >
        {/* specifying the drag area and giving the target key by fucntion to prevent dragging dimension element in measurement and vice versa */}
        <DragDropContainer targetKey={props.columnDataFunction} > 
          {props.columnDataName}
          </DragDropContainer>
        </div>
  
  
  );
}

export default ColumnDataElement;
