import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Toggle from "./components/ToggleRenderPropsChildren";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Show/Hide</button>
            {on && <h2>Hello213231</h2>}
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
