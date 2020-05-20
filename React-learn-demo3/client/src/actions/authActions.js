import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types.js";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
export const registerUser = (userData, history) => dispatch => {
  //给reducer
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //设置axios的headers token
      setAuthToken(token);
      //解析token
      const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  //删除localStorage
  localStorage.removeItem("jwtToken");
  //干掉请求头
  setAuthToken(false);
  //链接reducer
  dispatch(setCurrentUser({}));
};
