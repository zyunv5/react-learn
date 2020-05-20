import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropsTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="" onClick={this.onLogoutClick}>
            {user.name}
            退出
          </a>
        </li>
      </ul>
    );

    const guestLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="register" className="nav-link">
            注册
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-link">
            登录
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expend-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand">
              啦啦啦啦
            </Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/profiles" className="nav-link">
                    开发者
                  </Link>
                </li>
              </ul>

              {isAuthenticated ? authLink : guestLink}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropsTypes.func.isRequired,
  auth: PropsTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
