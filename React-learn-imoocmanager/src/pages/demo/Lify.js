import React, { Component } from "react";
import { Button } from 'antd'
import "./index.less"
import Child from "./Child";
import {Button} from 'antd'
class Lify extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div className="content">
        <div>React 生命周期介绍</div>
<<<<<<< HEAD
        <Button type="primary" onClick={this.handleAdd}>antd点击一下</Button>
=======
        <Button type="primary" onClick={this.handleAdd}>点击一下</Button>
>>>>>>> ee870d1786a230b8f2246c7bec32e14bc5e5aefa
        <div>{this.state.count}</div>
        <Child name={this.state.count} />
      </div>
    );
  }
}

export default Lify;
