import { handleActions } from "redux-actions";
import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD_COMMENTS]: (state, action) => {
      return [...action.payload];
    },
    [types.ADD_COMMENT_CARD]: (state, action) => {
      const { userName, textComment, idCard } = action.payload;
      let nextId = 1;

      if (state.length) {
        nextId = state[0].id + 1;
      }
      return [
        {
          id: nextId,
          name: userName,
          text: textComment,
          idCard
        },
        ...state
      ];
    },
    [types.UPDATE_COMMENT_CARD]: (state, action) => {
      const { changeTextComent, idCard, idComment } = action.payload;

      return state.map(comment => {
        if (comment.idCard === idCard && comment.id === idComment) {
          return {
            ...comment,
            text: changeTextComent
          };
        }
        return comment;
      });
    },
    [types.DELETE_COMMENT_CARD]: (state, action) => {
      const { idComment } = action.payload;

      return state.filter(comment => {
        return comment.id !== idComment;
      });
    }
  },
  inititalState
);
