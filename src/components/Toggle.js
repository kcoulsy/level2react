import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.on && <h2> On </h2>}
      </div>
    );
  }
}
