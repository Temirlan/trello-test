import { handleActions } from "redux-actions";
import {
  getBoards,
  updateBoardName,
  addCard,
  deleteCard
} from "../../service/server";

const inititalState = {
  boards: []
};

export default handleActions(
  {
    GET_BOARDS: state => ({
      ...state,
      boards: getBoards()
    }),

    UPDATE_BOARD_NAME: (state, action) => ({
      ...state,
      boards: updateBoardName(state.boards, action.payload)
    }),

    ADD_CARD: (state, action) => ({
      ...state,
      boards: addCard(state.boards, action.payload)
    }),

    DELETE_CARD: (state, action) => ({
      ...state,
      boards: deleteCard(state.boards, action.payload)
    })
  },
  inititalState
);
