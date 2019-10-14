import { AUTH_USER_SUCCESS, ENTER_TEXT } from "./actionTypes";
import { createAction } from "redux-actions";

export const authUser = createAction(AUTH_USER_SUCCESS);

export const enterText = createAction(ENTER_TEXT);
