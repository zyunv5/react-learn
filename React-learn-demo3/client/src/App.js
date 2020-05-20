import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard"
import store from "./store.js";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import jwt_decoded from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";

if (localStorage.getItem("jwtToken")) {
  setAuthToken(localStorage.getItem("jwtToken"));

  const decoded = jwt_decoded(localStorage.getItem("jwtToken"));
  store.dispatch(setCurrentUser(decoded));

  //检测token是否过期
  const currentTime = Date.now() / 1000;
  //判断当前是否大于token过期时间
  if (decoded.exp < currentTime) {
    //过期
    store.dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
