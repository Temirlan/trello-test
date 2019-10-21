import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  userName: "",
  enterText: "",
  auth: false
};

export default handleActions(
  {
    [types.INITIAL_USER]: (state, action) => {
      return {
        ...action.payload
      };
    },
    [types.AUTH_USER_SUCCESS]: state => {
      return {
        ...state,
        auth: true,
        userName: state.enterText
      };
    },

    [types.ENTER_TEXT]: (state, action) => {
      return {
        ...state,
        enterText: action.payload
      };
    }
  },
  inititalState
);
