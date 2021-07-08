import React, { useState, createContext } from "react";
import LineChart from "./Components/Plotter/Plotter";
import DataColumn from "./Components/DataColumn/DataColumn";
import NavBar from "./Components/NavBar/NavBar";
import DataSelectionBars from "./Components/DataSelectionBars/DataSelectionBars";
import "./App.css";
export var businessDataContext = createContext(null); //global data to handle the selected measures and diemensions.

function App() {
  const [buisnessDetails, setBuisnessDetails] = useState({
    measures: "",
    dimension: "",
  });

  const value = { buisnessDetails, setBuisnessDetails }; //passing the values of usestate hook in order to change the global buisness data anywhere in the children components
  return (
    <div>
      <businessDataContext.Provider value={value}>
        <NavBar />
        <div className="data-section">
          <DataColumn />
          <div className="data-visual">
            <DataSelectionBars />
            <LineChart data={buisnessDetails} />
          </div>
        </div>
      </businessDataContext.Provider>
    </div>
  );
}
export default App;
