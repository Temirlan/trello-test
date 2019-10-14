import { handleActions } from "redux-actions";
import { getBoards, updateBoardName } from "../../service/server";

const inititalState = {
  boards: []
};

export default handleActions(
  {
    GET_BOARDS: state => {
      return {
        ...state,
        boards: getBoards()
      };
    },

    UPDATE_BOARD_NAME: (state, action) => {
      return {
        ...state,
        boards: updateBoardName(state.boards, action.payload)
      };
    }
  },
  inititalState
);
