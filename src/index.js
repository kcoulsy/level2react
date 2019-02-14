import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Toggle from "./components/ToggleRenderPropsChildren";
import Modal from "./components/Modal";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Show</button>
            <Modal on={on} toggle={toggle}>
              <h2>In modal</h2>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
