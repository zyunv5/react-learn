import React, { Component } from "react";
import { Card, Table } from "antd";
class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], dataSource2: [] };
  }
  componentDidMount() {
    const data = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];
    this.setState({
      dataSource: data
    });
  }
  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];
    return (
      <div>
        <Card title="基础表格">
          <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false} />
        </Card>
        <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
          <Table columns={columns} dataSource={this.state.dataSource2} bordered pagination={false} />
        </Card>
      </div>
    );
  }
}

export default BasicTable;
