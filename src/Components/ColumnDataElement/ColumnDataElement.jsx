import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';


function ColumnDataElement(props) {


  return (


        <div
        >
        <DragDropContainer targetKey="foo" >
          {props.columnDataName}
          </DragDropContainer>
        </div>
  
  
  );
}

export default ColumnDataElement;
