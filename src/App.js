// import LineChart from "./Components/Plotter/Plotter";
import DataColumn from "./Components/DataColumn/DataColumn";
import NavBar from "./Components/NavBar/NavBar";
import DataSelectionBars from "./Components/DataSelectionBars/DataSelectionBars";
import './App.css';
function App() {

  return (
    <div >
      <NavBar />
      <div className="data-section">
        <DataColumn />
        <DataSelectionBars />
        </div>
      {/* <LineChart /> */}
    </div>
  );
}

export default App;
