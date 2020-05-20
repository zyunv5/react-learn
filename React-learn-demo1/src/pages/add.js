import React, { Component } from "react";
import Table from "../components/Table";
import Panel from "../components/Panel";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Table />
        <Panel/>
      </div>
    );
  }
}

export default Add;
