import React from 'react';
import {withRouter} from "dva/router"

class Child extends React.Component{
  handleClick(){
    this.props.history.push("/");
  }
  render(){
    return(
      <div>
        <div>我是通用组件</div>
        <button onClick={this.handleClick.bind(this)}>首页——child</button>
      </div>
    )
  }
}

export default withRouter(Child);
