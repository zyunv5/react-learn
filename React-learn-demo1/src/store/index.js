import { createStore, combineReducers } from "redux";
import { ADD_ITEM, DEL_ITEM, INIT_ITEM } from "../actions";

function reducer(state = { items: [] }, action) {
  switch (action.type) {
    case INIT_ITEM:
      return{
        ...state,
        items:action.items
      }
      break;
    case ADD_ITEM:
      //action.items
      break;
    case DEL_ITEM:
      break;
    default:
      return state;
  }
}

export default createStore(reducer);
