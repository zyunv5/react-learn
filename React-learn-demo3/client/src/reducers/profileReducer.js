import { GET_PROFILE, PROFILE_LOADING } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: true
      };
    case PROFILE_LOADING:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
