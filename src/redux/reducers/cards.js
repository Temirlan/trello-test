import { handleActions } from "redux-actions";
import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD_CARDS]: (state, action) => {
      return [...action.payload];
    },
    [types.ADD_CARD]: (state, action) => {
      const lengthCard = state.length;
      const { name, userName, idBoard } = action.payload;
      let nextId = 1;

      if (lengthCard) {
        nextId = state[lengthCard - 1].id + 1;
      }

      return [
        ...state,
        {
          id: nextId,
          name,
          userName,
          description: "",
          idBoard
        }
      ];
    },

    [types.DELETE_CARD]: (state, action) => {
      const idCard = action.payload;

      return state.filter(card => card.id !== idCard);
    },

    [types.UPDATE_CARD_NAME]: (state, action) => {
      const { idCard, name } = action.payload;

      return state.map(card => {
        if (card.id === idCard) {
          return {
            ...card,
            name
          };
        }
        return card;
      });
    },

    [types.ADD_CARD_DESCRIPTION]: (state, action) => {
      const { idCard, text } = action.payload;

      return state.map(card => {
        if (card.id === idCard) {
          return {
            ...card,
            description: text
          };
        }
        return card;
      });
    }
  },
  inititalState
);
