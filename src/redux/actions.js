import { createAction } from "redux-actions";
import * as types from "./types";

export const initialLoadBoards = createAction(types.INITIAL_LOAD_BOARDS);
export const initialLoadCards = createAction(types.INITIAL_LOAD_CARDS);
export const initialLoadComments = createAction(types.INITIAL_LOAD_COMMENTS);
export const initialUser = createAction(types.INITIAL_USER);

export const enterText = createAction(types.ENTER_TEXT);
export const authUser = createAction(types.AUTH_USER_SUCCESS);

export const addCard = createAction(types.ADD_CARD);
export const updateBoardName = createAction(types.UPDATE_BOARD_NAME);

export const deleteCard = createAction(types.DELETE_CARD);
export const updateCardName = createAction(types.UPDATE_CARD_NAME);

export const addCardDescription = createAction(types.ADD_CARD_DESCRIPTION);
export const addCommentCard = createAction(types.ADD_COMMENT_CARD);
export const updateCommentCard = createAction(types.UPDATE_COMMENT_CARD);
export const deleteCommentCard = createAction(types.DELETE_COMMENT_CARD);
