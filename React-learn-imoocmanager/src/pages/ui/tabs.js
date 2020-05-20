import React, { Component } from "react";
import { Card,  Icon,  message, Tabs } from "antd";
import "./ui.less";
const { TabPane } = Tabs;

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback} >
            <TabPane tab={<span><Icon type='plus'/>Tab 1</span>} key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab={<span><Icon type='edit'/>Tab 2</span>} key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab={<span><Icon type='delete'/>Tab 3</span>} key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab动态页签" className="card-wrap" >
          <Tabs
          defaultActiveKey="1"
          type="editable-card"
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          onEdit={this.onEdit}
          >
           {
             this.state.panes.map((panel)=>{
               return <TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>
             })
           }
          </Tabs>
        </Card>
      </div>
    );
  }
  componentWillMount(){
    const panes=[
      {title:'Tab 1',content:'Tab 1',key:'1'},
      {title:'Tab 2',content:'Tab 2',key:'2'},
      {title:'Tab 3',content:'Tab 3',key:'3'},
    ]
    this.setState({
      panes
    })
  }

  callback = key => {
    message.info(`Hi,您选择了页签：${key}`);
  };
  onChange=activeKey=>{
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
}

export default Message;
