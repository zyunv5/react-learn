import React, { Component } from "react";
import { Card, Button } from "antd";
import './ui.less'

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true
    };
    this.handleCloseLoading=this.handleCloseLoading.bind(this)
  }
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disable>Imooc</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组">
        <Button.Group>
          <Button type="primary" icon="left">返回</Button>
          <Button type="primary" icon="next">前进</Button>
        </Button.Group>
        </Card>
      </div>
    );
  }
  handleCloseLoading(){
    this.setState({
      loading:false
    })
  }
}

export default Buttons;
