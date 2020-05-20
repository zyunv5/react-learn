import React, { Component } from 'react'
import { Card, Button, Form, Input, Icon,  Checkbox, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload } from 'antd'
// import moment from 'moment'
const { Option } = Select
const FormItem = Form.Item
const RadioGroup = Radio.Group
const TextArea = Input

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { xs: 24, sm: 4 },
      wrapperCol: { xs: 24, sm: 12 }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: { span: 12, offset: 4 }
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator('username', { initialValue: '', rules: [{ required: true, message: 'Please input your username!' }] })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
              )}
            </FormItem>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator('userpwd', { initialValue: '', rules: [{ required: true, message: 'Please input your password!' }] })(
                <Input type="password" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator('sex', { initialValue: '' })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', { initialValue: '18' })(<InputNumber />)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator('state', { initialValue: '2' })(
                <Select>
                  <Option value="1">咸鱼</Option>
                  <Option value="2">腊肉</Option>
                  <Option value="3">辣鸡</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator('interest', { initialValue: [] })(
                <Select mode="multiple">
                  <Option value="1">唱</Option>
                  <Option value="2">跳</Option>
                  <Option value="3">rap</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator('isMarried', { valuePropName: 'checked', initialValue: true })(<Switch />)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator('birthday', { rules: [{ type: 'object', required: true, message: 'Please select time!' }] })(
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
              )}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator('address', { initialValue: '' })(<TextArea autosize={{ minRows: 4, maxRows: 6 }} />)}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator('time', { rules: [{ type: 'object', required: true, message: 'Please select time!' }] })(<TimePicker />)}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator('userImg', { initialValue: '' })(
                <Upload listType="picture-card" showUploadList={false} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                  {this.state.userImg ? <img src={this.state.userImg} alt=""/> : <Icon type="plus" />}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>{getFieldDecorator('userCheck', { initialValue: '' })(<Checkbox>我已经阅读过协议</Checkbox>)}</FormItem>
            <FormItem {...offsetLayout}>
              <Button
                type="primary"
                onClick={() => {
                  this.handleSubmit()
                }}
              >
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
  handleSubmit() {
    let userInfo = this.props.form.getFieldsValue()
    console.log(JSON.stringify(userInfo))
    // this.props.form.validateFields((err, value) => {
    //   if (!err) {
    //     Message.success(`${userInfo.userName}::${userInfo.userpwd}`)
    //   }
    // })
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      )
    }
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_reg' })(Register)
export default WrappedHorizontalLoginForm
