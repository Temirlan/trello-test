import { combineReducers } from "redux";

import boards from "./boards";
import cards from "./cards";
import comments from "./comments";
import auth from "./auth";

export default combineReducers({
  boards,
  cards,
  comments,
  auth
});
