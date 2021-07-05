// import LineChart from "./Components/Plotter/Plotter";
import DataColumn from "./Components/DataColumn/DataColumn";
import NavBar from "./Components/NavBar/NavBar";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  function onDragEnd(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <NavBar />
      <DragDropContext onDragEnd={onDragEnd}>
        <DataColumn />
      </DragDropContext>
      {/* <LineChart /> */}
    </div>
  );
}

export default App;
