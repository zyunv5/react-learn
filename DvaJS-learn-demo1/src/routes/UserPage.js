import React,{Fragment} from 'react';
import {Link} from "dva/router";
import Child from "../components/Child"

class UserPage extends React.Component{
  handleClick=()=>{
    this.props.history.push("/")
  }
  render(){
    return(
      <Fragment>
      <div>我是用户页面</div>
      <Link to="/">首页</Link>
      <button onClick={this.handleClick}>首页</button>
      <Child/>
      </Fragment>
    )
  }
}
export default UserPage;
