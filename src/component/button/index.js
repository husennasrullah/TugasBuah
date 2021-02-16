import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className={this.props.className}
        id={this.props.id}
        name={this.props.name}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
