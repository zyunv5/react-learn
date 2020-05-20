import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to={"/detail/"+item.get('id')}>
              <ListItem key={index}>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <div className="desc">{item.get("desc")}</div>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  // list:state.get('home').get('article')
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});
export default connect(
  mapState,
  mapDispatch
)(List);
