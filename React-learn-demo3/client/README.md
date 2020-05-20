This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 快捷键

```
rcc 是新建组件
rfc是新建无状态组件

在vscode的设置中以下设置，帮助你快速注释
 "emmet.includeLanguages": {
        "javascript":"javascriptreact"
    },
```

## 路由的引用

```
推荐在app.js中引用

主要跳转变换的组件出可以设置成Route
```

## react 添加代理

```
直接写在package.json中
 "proxy":"http://localhost:5000"
```

## NPM 模块 classnames

## redux 配置

```
安装 redux react-redux redux-thunk

创建了store.js,引入redux-thunk 写好中间件
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
//reducer是一个函数 用于生产新的state。reducer接受Action和State，返回一个新的State
const store = createStore(() => [], {}, applyMiddleware(...middleware));
export default store;

新建reducer文件夹 建立index.js文件 集合所有可能涉及到的reducer
import {combineReducers} from "redux";
import authReducer from "./authReducer";
export default combineReducers({

})

在reducer文件件下建立 authReducer.js文件 写入
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

用户触发表单提交按钮 触发Action
action会携带类型和表单数据给reducer
reducer会更新数据并返回最新状态
页面重新渲染

```
## 触发dispatch
```

```
## action 里面处理路由
```
首先使用withRouter把组件包裹起来

触发dispatch的时候把 history传过去
this.props.registerUser(newUser,this.props.history);

```
https://tylermcginnis.com/
