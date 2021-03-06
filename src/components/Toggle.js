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
        {this.state.on && this.props.children}
      </div>
    );
  }
}
