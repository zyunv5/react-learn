import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"), //当前文件夹下的index.js
  loading() {
    return <div>正在加载</div>;
  }
});

export default () => <LoadableComponent />;//返回一个无状态组件
