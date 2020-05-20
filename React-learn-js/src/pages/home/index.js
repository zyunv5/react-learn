import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {//挂载完毕
    this.props.changHomeData();
    this.bindEvents();//绑定事件
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }}
const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatch = dispatch => ({
  changHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>400){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(
  mapState,
  mapDispatch
)(Home);
