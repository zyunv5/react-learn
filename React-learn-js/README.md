# react 简书实战
## 技术栈
react
react-router-dom
react-redux
redux-thunk
immutable
react-loadable

## 开发环境搭建

```
 1.<Fragment></Fragment> 占位符，不会渲染成div

 2.<li key={index} onClick={this.handleItemDelete.bind(this, index)}
              dangerouslySetInnerHTML={{__html:item}}>
              </li>
dangerouslySetInnerHTML 不要转译
当用户输入 <h1>hello world</h1>
生成的是h1 标签

3. 样式的class是className    label的for 应该写成htmlFor
4. 父元素传过来 从this.props获取
```

## propTypes 验证与 defaultProps 设置默认值

## props state 与 render

```
当组件的state或者props发生变化的时候，render函数就会重新执行
```
## 虚拟DOM
```
1。state数据
2.JSX模板
3.数据+模板 结合 生成真是的DOM来显示
4.生成虚拟DOM（虚拟DOM
5.state发生了变化
6.数据+模板 生成新的虚拟DOM
7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容
8.直接操作DOM，改变span中的内容
```
## 深入理解虚拟DOM
```
JSX->createElement->虚拟DOM（JS对象）->真实的DOM

优点：
1. 性能提升了
2.它使得跨端应用得以实现。RN
```
## 虚拟DOM中的diff算法
```
setState是异步的
同级比较： 一级不对 则删除 重新生成 替换
key值便于替换
少用index作为key值
```
## react中的ref的使用
```
this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }),()=>{  //这里是回调函数 能处理上面执行完之后的内容
      console.log(this.ul.querySelectorAll('div').length);
    });
```
## react生命周期
```
生命周期函数会在某一时刻，组件会自动调用执行的函数
初始化:
挂载：
1.componentWillMount 在组件即将被挂载到页面的时刻自动执行 只会在第一次挂载的时候执行
2.render
3.componentDidMount 组件被挂载到页面之后执行 只会在第一次挂载的时候执行
更新的时候：
1.shouldComponentUpdate 组件更新之前
2.componentWillUpdate 如果shouldComponentUpdate返回了true，则执行.如果是false，则不执行
3.componentDidUpdate render之后就是componentDidUpdate
componentWillReceiveProps 一个组件要从父组件接收参数、只要父组件的render函数重新执行了，子组件的这个生命周期函数就会被执行
移除：
componentWillUnmount 组件即将被移除
```
## react 生命周期函数的使用场景

```
render必须存在

当父组件的render函数执行的时候 子组件的render函数也被执行了
这样会造成性能上缺失
优化方法是在子组件的 shouldComponentUpdate return false

请求方法都放在 componentDidMount
```

## 使用 Charles 进行接口数据模拟

```
Charles 选择tools 选择map local
```

### Charles 进行接口模拟时抓不到本地的 localhost

```
把Host的位置换成 把local转为localhost.charlesproxy.com

访问
http://localhost.charlesproxy.com:3001/api/todolist
```

## react 的 css 过渡动画

## react-transition-group 实现动画

```
npm i react-transition-group

 in={this.state.show}   state 里面的状态
          timeout={1000}  动画执行的时间
          classNames="fade"   动画的名称和css文件内 class名称的开头一致
          onEntered={el => {
            el.style.color = "blue";  执行完动画后的回调
          }}
          appear={true}    初始化页面时执行动画
```

## redux

```
reducer+flux
state 数据

新建一个action action里面至少包含一个type

三个原则：
store是唯一的
只有store能改变自己的内容
reducer必须是纯函数 //纯函数 给固定的输入 就一定会有固定的输出 且不会有任何的副作用

createStore
store.dispatch
store.getState
store.subscribe
```

## 拆分 UI 组件与容器组件

```
UI组件负责组件的渲染
容器组件负责组件的逻辑
```

## 无状态组件

```
UI组件 就能改写成无状态组件，没有逻辑相关的事务

只有render函数的时候 就可以封装成无状态组件

性能比较高，因为它只是一个函数
```

## redux-thunk 进行 ajax 请求

```
thunk 能够使函数
把异步代码放到thunk里面解决

export const getTodoList = () => {
  return dispatch => {
    axios.get("list.json").then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    });
  };
};
```

## redux 中间件

```
action-store
```

## redux-sage

```
作用和thunk一样
二者相同

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

创建saga.js
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  const res=yield axios.get('/list.json')
  const action=initListAction(res.data);
  yield put(action);
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
```

## react-redux

```
1.新建store文件夹
    里面创建index.js
    import {createStore} from "redux";
    const store=createStore();
    export default store;
    创建reducer.js文件
    const defaultState={ //创建默认数据
        inputValue:'',
        list:[]
    }
    export default (state,action)=>{ //处理数据
        return state;
    }
2.在所需要的js文件中引入store下的index
之后在constructor里面写上
this.state=store.getState()
3.在项目的根目录下的index.js，内
    import {Provider} from "react-redux";
    import store from "./store2/index"
    const App=(
        <Provider store={store}>
        <TodoList />
        </Provider>
    )
    ReactDOM.render(App, document.getElementById('root'));

    使用provider组件 传递store内容
4.在传递数值的组件上
    import {connect} from "react-redux"

    //页面上的组件 使用this.props.xxx

    const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue
        }
    }
    export default connect(mapStateToProps,null)(TodoList);
```
## 使用 styled-components

```
安装 npm i styled-components
将index.css改写成style.js
import {createGlobalStyle} from 'styled-components';
export const Globalstyle=createGlobalStyle`
    //这里写公共样式
    body{
        margin:0;
        padding:0;
        background:green;
    }
`
在项目文件内引入 import { Globalstyle } from './style.js'
之后在render函数里面使用
 render() {
    return (
      <div className="dell">
        <Globalstyle />
        hello world
      </div>
    )
  }

```
## 改写无状态组件

```
class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputValue, handleInputChange, handleClick, list } = this.props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} onClick={this.props.handleDelete}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

------改写------
const TodoList=(props)=>{
  const { inputValue, handleInputChange, handleClick, list } = props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
}
```

## 使用 react-Redux

```
1.安装Redux
2.安装react-Redux
3.创建store文件夹 目录内创建index.js与reducer.js文件
index.js
import { createStore } from "redux";
import {reducer} from "./reducer.js"
const store=createStore();
export default store;

reducer.js
const defaultState = {};
export default (state = defaultState, action) => {
  return state;
};
4.在App.js文件内引入
import store from "./store"
再引入
import { Provider } from "react-redux";
之后下面用<Provider>标签进行所有的包裹
 <Provider store={store}>
        <Header />
      </Provider>
5.组件内引入
import { connect } from "react-redux";
将组件底部的导出部分
export default Header;
改写成
const mapStateToProps=(state)=>{}
const mapDispatchToProps=()=>{}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
6.将组件内的state放入到reducer里面
7.删除组件内的constructor
8.
const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};

```

## immutable

```
1.cnpm i immutable --save-dev
2.引入
import { fromJS } from "immutable";
3.改写默认数据对象
const defaultState = fromJS({
  focused: false
});
4.组件内的取值变成
const mapStateToProps = state => {
  return {
    focused: state.header.get('focused')
  };
};
5.将reducer.js文件内的返回改成
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set("focused", true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};
```

## redux-immutable

```
1.安装 cnpm i redux-immutable
2.将import { combineReducers } from "redux";
改成
import { combineReducers } from "redux-immutable";
3.
const mapStateToProps = state => {
  return {
    focused: state.header.get('focused')
  };
};
改成
const mapStateToProps = state => {
  return {
    focused: state.get('header).get('focused')
  };
};
```
## react 路由
```
1.cnpm i react-router-dom --save-dev
2.进入App.js并引入
import { BrowserRouter, Route } from "react-router-dom";
//exact 精准匹配
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact render={() => <div>home</div>} />
          <Route path="/detail" exact render={() => <div>detail</div>} />
        </BrowserRouter>
      </Provider>
    );
  }
}
```
## 发送ajax流程
```
1.绑定一个事件
2.然后派发一个action
3.进入redux-thunk中 再action中写入异步操作
4.请求到了之后派发一个同步的action
5.然后reducer接收到这个同步的action，并改变数据
6.数据变了 页面就跟着变了
```
## PureComponent
```
React创建了PureComponent组件创建了默认的shouldComponentUpdate行为。
这个默认的shouldComponentUpdate行为会一一比较props和state中所有的属性，只有当其中任意一项发生改变是，才会进行重绘。
需要注意的是，PureComponent使用浅比较判断组件是否需要重绘
这些例子都是在原对象上进行修改，由于浅比较是比较指针的异同，所以会认为不需要进行重绘。
为了避免出现这些问题，推荐使用immutable.js。
immutable.js会在每次对原对象进行添加，删除，修改使返回新的对象实例。
任何对数据的修改都会导致数据指针的变化。
如果不在shouldComponentUpdate中进行深比较，会造成即使state中的对象值没有改变，因为是不同的对象，而在shouldComponentUpdate返回true，造成不必要的渲染。
所以只能是深拷贝和深比较。
而深拷贝和深比较都浪费浏览器的性能，所以immutable登场了。

因为使用了immutable.js 所以和PureComponent 结合一点儿问题都没有
将
import React, { Component } from "react";
替换成
import React, { PureComponent } from "react";
```
## react 路由 单组件模式
```
1.引入Link
import { Link } from "react-router-dom";
2.绑定路由
 <Link key={index} to="/detail"></Link>
```
## 标签内渲染标签
```
在标签上使用属性 dangerouslySetInnerHTML
dangerouslySetInnerHTML={{ __html: content }}
```
## 路由传参

```
1.在使用Link组件的时候 传入id
<Link key={index} to={"/detail/"+item.get('id')}>
2.在App.js中 使用路由的时候，在路由后面拼接id
<Route path="/detail/:id" exact component={Detail} />
3.在详情页获取id
    console.log(this.props.match.params.id)

第二种方法:
1.在组件内将Link改写成
<Link key={index} to={"/detail?id="+item.get('id')}>
2.在App.js中 使用路由
 <Route path="/detail" exact component={Detail} />
3.在详情页中获取
    console.log(this.props.location.search)
    ?id=1
    ?id=2
4.之后再自己截取
```

## 获取 input 中的值 ref innerRef

```
 <Input placeholder="账号" ref={input => {this.account = input;}}/>
<Input placeholder="密码" type="password" ref={input => {this.password = input;}}/>
<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
 login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
//使用innerRef 反倒获取不到值 使用ref绑定
然后获取到节点 之后获取value属性

```

## react 异步组件
```
当前加载的页面的逻辑都在bundle.js中
又用第三方模块
1.安装 cnpm i react-loadable 
2.假设详情页只有当你进入详情页才加载
在详情页面的文件夹内，创建loadable.js文件
import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"), //当前文件夹下的index.js
  loading() {
    return <div>正在加载</div>;
  }
});

export default () => <LoadableComponent />;//返回一个无状态组件
3.在App.js中，把原来detail组件的引入从
import Detail from "./pages/detail/index";
改为
import Detail from "./pages/detail/loadable.js";
使用异步加载
4.由于detail组件需要获取路由参数，但是改成异步组件后，不能获取
这是引入
import { withRouter } from "react-router-dom";
之后在detail中的index.js中的底部导出的时候调用 withRouter
export default connect(mapState,mapDispatch)(withRouter(Detail));
```




