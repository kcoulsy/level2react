import React from "react";
import ReactDOM from "react-dom";

import Toggle from "./components/Toggle";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Toggle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
