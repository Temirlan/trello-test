import { handleActions } from "redux-actions";

const inititalState = {
  userName: "",
  enterText: "",
  auth: false
};

export default handleActions(
  {
    AUTH_USER_SUCCESS: state => ({
      ...state,
      auth: true,
      userName: state.enterText
    }),

    ENTER_TEXT: (state, action) => ({
      ...state,
      enterText: action.payload
    })
  },
  inititalState
);
