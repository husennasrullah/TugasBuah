import React, { Component } from "react";
import "./style.css";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.placeholder}
        hidden={this.props.hidden}
        onChange={this.state.onChange}
      ></input>
    );
  }
}

export default Field;
