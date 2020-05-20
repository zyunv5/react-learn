import React, { Component } from "react";
import { Card, Button, Form, Input, Icon,Message,Checkbox } from "antd";
const FormItem = Form.Item;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { getFieldDecorator} = this.props.form;
  
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem >
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input your username!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem>
            {getFieldDecorator("userpwd", {
              rules: [{ required: true, message: "Please input your userpass!" }]
            })(<Input prefix={<Icon type="pass" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="请输入密码" />)}
            </FormItem>
            <FormItem>
            {getFieldDecorator("remember", {valuePropName:'checked',initialValue:true
            })(<Checkbox>记住密码</Checkbox>)}
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={()=>{this.handleSubmit()}}>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form layout="horizontal">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
  handleSubmit(){
    let userInfo=this.props.form.getFieldsValue()
    this.props.form.validateFields((err,value)=>{
      if(!err){
        Message.success(`${userInfo.userName}::${userInfo.userpwd}`);
      }
    })
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(FormLogin);
export default WrappedHorizontalLoginForm
