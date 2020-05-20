import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header/index.js";
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login/index.js";
import Write from "./pages/write/index.js";
import { Globalstyle } from "./style.js";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
