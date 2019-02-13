import React from "react";
import ReactDOM from "react-dom";

import Toggle from "./components/ToggleRenderProps";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Toggle
        render={(on, toggle) => (
          <div>
            <button onClick={toggle}>Show/Hide</button>
            {on && <h2>Hello</h2>}
          </div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
