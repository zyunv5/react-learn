import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./pages/view";
import Add from "./pages/add";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SERVER } from "./config";
import { INIT_ITEM } from "./actions";
import axios from "axios";

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      panelShow: false
    };
  }
  async componentDidMount() {
    let url = `${SERVER}/list`;
    axios.get(url).then(res => {
      this.props.initItem(res.data.data);
    });
  }
  handleClick(){
    console.log(this)
  }
  render() {
    return (
      <Router>
        <div>
          <Link className="btn btn-default glyphicon glyphicon-plus" to="/add" onClick={()=>this.handleClick(this)}>
            添加商品
          </Link>
          <Route path="/" exact component={View} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    );
  }
}
export default connect(
  (state, props) => {
    return state;
  },
  {
    initItem(items) {
      return {
        type: INIT_ITEM,
        items
      };
    }
  }
)(App);
