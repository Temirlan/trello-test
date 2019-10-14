import { combineReducers } from "redux";

import boardList from "./boardList";
import auth from "./auth";

export default combineReducers({
  boardList,
  auth
});
