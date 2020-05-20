import React, { Component } from "react";
import { Card, Button,Modal } from "antd";
import './ui.less'

class Modals extends Component {
  constructor(props) {
    super(props);
   this.state={
    showModal1:false,
    showModal2:false,
    showModal3:false,
    showModal4:false,
    showModal5:false,
    showModal6:false,
    showModal7:false,
    showModal8:false,
   }
  }
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息模态框" className="card-wrap">
        <Button type="primary" onClick={()=>this.handleConfirm('showModal5')}>confirm</Button>
        <Button type="primary" onClick={()=>this.handleConfirm('showModal6')}>info</Button>
        <Button type="primary" onClick={()=>this.handleConfirm('showModal7')}>success</Button>
        <Button type="primary" onClick={()=>this.handleConfirm('showModal8')}>warning</Button>
      </Card>
        <Modal title="react" visible={this.state.showModal1} onCancel={()=>{
          this.setState({showModal1:false})
        }}>
          <div>hahahahahha</div> 
        </Modal>
        <Modal title="react" visible={this.state.showModal2} 
        okText="好的" cancelText="算了"
        onCancel={()=>{
          this.setState({showModal2:false})
        }}>
          <div>hahahahahha</div> 
        </Modal>
      </div>
    );
  }
 handleOpen=(type)=>{
  this.setState({
    [type]:true
  })
 }
 handleConfirm=(type)=>{
   Modal.confirm({ 
     title:'确认?',
     content:'你确定学会了吗?',
     onOk(){
       console.log('ok!!!')
     }
   })
 }
}

export default Modals;
