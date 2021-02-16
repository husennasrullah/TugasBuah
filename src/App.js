import React, { Component } from "react";
import FormInput from "./template/formInput";
import FormBeli from "./template/formBeli";
import Table from "./template/table";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [],
      databuah: [],
    };
  }

  render() {
    return (
      <>
        <div className="form">
          <FormInput />
          <FormBeli />
        </div>
        <div className="form2">
          <Table data={this.state.databuah} />
        </div>
      </>
    );
  }
}

export default App;
