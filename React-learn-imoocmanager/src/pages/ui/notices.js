import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

class Notices extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>
            success
          </Button>
        </Card>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>
            error
          </Button>
        </Card>
      </div>
    )
  }
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: 'nice 兄弟',
      description: '继续加油呀~'
    })
  }
}

export default Notices
