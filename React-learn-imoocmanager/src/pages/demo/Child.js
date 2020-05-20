import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <div>{this.props.name}</div>;
  }
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("did mount");
  }
  componentWillReceiveProps(newProps) {
    console.log("will props" + newProps.name);
  }
  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }
  componentWillUpdate() {
    console.log("will update");
  }
  componentDidUpdate() {
    console.log("did update");
  }
}

export default Child;
