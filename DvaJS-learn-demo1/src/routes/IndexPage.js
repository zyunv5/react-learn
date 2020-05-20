import React from "react";
import { connect } from "dva";
import * as apis from "../services/example";

class IndexPage extends React.Component {
  handleClick = () => {
    this.props.dispatch({
      type: "indexTest/setName", //对应model下命名空间的方法名
      data: {
        name: "ccc",
      },
    });
  };
  handleClickAsync = () => {
    this.props.dispatch({
      type: "indexTest/setNameAsync", //对应model下命名空间的方法名
      data: {
        name: "ddd",
      },
    });
  };
  componentDidMount() {
    // apis.testCnode().then((res)=>{console.log(res)})
    apis.mockData().then((res) => {
      console.log(res);
    });
  }
  testCnode = () => {
    this.props.dispatch({
      type: "indexTest/testCnode", //对应model下命名空间的方法名
    });
  };
  render() {
    console.log(this.props.cnodeData);
    return (
      <div>
        我是首页{this.props.msg}
        <div>{this.props.name}</div>
        <button onClick={this.handleClick}>改名字</button>
        <button onClick={this.handleClickAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
        {this.props.cnodeData&&this.props.cnodeData.map((item,index)=>{
          return <div key={index}>{item.id}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    msg: "bbb",
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData,
  };
};

export default connect(mapStateToProps)(IndexPage);
