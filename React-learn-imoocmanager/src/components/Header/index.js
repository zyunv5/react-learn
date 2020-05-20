import React, { Component } from "react";
import "./index.less";
import Util from "../../utils/utils";
import axios from "../../axios/index";
import { Row, Col } from "antd";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      sysTime: "",
      weather: ""
    };
  }
  componentWillMount() {
    this.setState({
      userName: "河畔一角"
    });
    setInterval(() => {
      let sysTime = Util.formateTime();
      this.setState({
        sysTime
      });
    }, 1000);
    this.getWeatherAPIData();
  }
  getWeatherAPIData() {
    axios
      .jsonp({ url: "http://wthrcdn.etouch.cn/weather_mini?city=北京" })
      .then(res => {
        const data = res.data.forecast[0];
        this.setState({
          weather: data.type
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href=" ">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
