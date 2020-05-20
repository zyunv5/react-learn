import axios from "axios";
import { GET_PROFILE,PROFILE_LOADING } from "./types";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get("/api/profile/")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
