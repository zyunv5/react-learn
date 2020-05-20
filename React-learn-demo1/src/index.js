import React from "react";
import { render } from "react-dom";
import App from "./App";
//引入redux
import { Provider } from "react-redux"; //引入Provider
import store from "./store/index"; //引入存放action的index

import "./assets/css/bootstrap.css"

//在根渲染的位置 加入Provider标签
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
