import { handleActions } from "redux-actions";

const inititalState = {
  cards: []
};

export default handleActions(
  {
    ADD_CARD: (state, action) => ({
      ...state
    }),

    DELETE_CARD: (state, action) => ({
      ...state
    }),

    UPDATE_CARD_NAME: (state, action) => {
      return {
        ...state
      };
    }
  },
  inititalState
);
