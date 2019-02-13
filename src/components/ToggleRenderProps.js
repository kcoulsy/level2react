import React, { Component } from "react";

export default class ToggleRenderProps extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const { render } = this.props;
    return <div>{render(this.state.on, this.toggle)}</div>;
  }
}
