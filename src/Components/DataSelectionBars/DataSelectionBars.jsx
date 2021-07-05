import React,{useState} from "react"
import {  DropTarget } from 'react-drag-drop-container';

function DataSelectionBars(){
    const [test,settest] = useState("");
  
    function handleDrop(e){
      console.log(e);
      console.log(e.containerElem.innerText,"value of added element");
      settest(e.containerElem.innerText);
    }
    return (
        <DropTarget targetKey="foo"  onHit  = {handleDrop}  >
        <p>---{test}</p>
        <p>---{test}</p>
    </DropTarget>
    );
}

export default DataSelectionBars;