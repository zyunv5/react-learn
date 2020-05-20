import * as apis from "../services/example";

export default {
  namespace: "indexTest", //命名空间
  state: { name: "aaa", cnodeData: [] }, //状态
  reducers: {
    setName(state, payload) {
        let _state = JSON.parse(JSON.stringify(state));
        _state.name = payload.data.name;
        return _state;
    },
    setCnodeDataList(state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.cnodeData = payload.data;
      return _state;
    },
    testPath(state, payload) {
      //   console.log("用户页");
      return state;
    },
  },
  effects: {
    *setNameAsync({ payload }, { put, call }) {
      yield put({
        type: "setName", //对应reducer的action
        data: {
          name: "超人",
        },
      });
      // yield console.log('run');
    },
    *testCnode({ payload }, { put, call }) {
      let rel = yield call(apis.testCnode); //第一个参数是路径，第二个参数是参数
      if (rel.data) {
        yield put({
          type: "setCnodeDataList",
          data: rel.data.data,
        });
      }
    },
  },
  subscriptions: {
    //订阅，当页面打开时，订阅发生
    testSub({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        //监听路由
        if (pathname === "/user") {
          //当路由跳转到user时，发生事件
          dispatch({
            type: "testPath",
          });
        }
      });
    },
  },
};
