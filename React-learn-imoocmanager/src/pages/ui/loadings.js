import React, { Component } from 'react'
import { Card, Modal, Spin, Icon, Alert } from 'antd'
import './ui.less'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert message="React" description="欢迎来到React" type="info" />
          <Spin tip="加载中">
            <Alert message="React" description="欢迎来到React" type="warning" />
          </Spin>
        </Card>
      </div>
    )
  }
  handleOpen = type => {
    this.setState({
      [type]: true
    })
  }
  handleConfirm = type => {
    Modal.confirm({
      title: '确认?',
      content: '你确定学会了吗?',
      onOk() {
        console.log('ok!!!')
      }
    })
  }
}

export default Loading
