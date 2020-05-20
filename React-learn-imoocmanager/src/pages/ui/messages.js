import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => {this.showMessage()}}>success</Button>
          <Button>info</Button>
          <Button>warning</Button>
          <Button>error</Button>
        </Card>
      </div>
    )
  }
  showMessage = () => {
    message.success('你成功了，帅哥~')
  }
}

export default Message
