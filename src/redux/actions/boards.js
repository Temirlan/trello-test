import {
  GET_BOARDS,
  UPDATE_BOARD_NAME,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD_NAME
} from "./actionTypes";
import { createAction } from "redux-actions";

export const getBoards = createAction(GET_BOARDS);

export const updateBoardName = createAction(UPDATE_BOARD_NAME);

export const addCard = createAction(ADD_CARD);

export const deleteCard = createAction(DELETE_CARD);

export const updateCardName = createAction(UPDATE_CARD_NAME);
