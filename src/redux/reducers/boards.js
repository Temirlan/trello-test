import { handleActions } from "redux-actions";

import * as types from "../types";
import { InitialBoards } from "../../service/boards";

export default handleActions(
  {
    [types.INITIAL_LOAD_BOARDS]: (state, action) => {
      return [...action.payload];
    },
    [types.UPDATE_BOARD_NAME]: (state, action) => {
      const { name, idBoard } = action.payload;

      return state.map(board => {
        if (board.id === idBoard) {
          return {
            id: idBoard,
            name,
            cards: board.cards
          };
        }
        return board;
      });
    }
  },
  InitialBoards
);
