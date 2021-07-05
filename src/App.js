// import LineChart from "./Components/Plotter/Plotter";
import DataColumn from "./Components/DataColumn/DataColumn";
import NavBar from "./Components/NavBar/NavBar";
import DataSelectionBars from "./Components/DataSelectionBars/DataSelectionBars";
function App() {

  return (
    <div className="App">
      <NavBar />
        <DataColumn />
<DataSelectionBars />
      {/* <LineChart /> */}
    </div>
  );
}

export default App;
