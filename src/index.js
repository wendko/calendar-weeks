import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/calendar.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
