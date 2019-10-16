import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "./redux/store";
import * as actions from "./redux/actions";
import Trello from "./components/Trello/Trello";

function saveInLocalStorage() {
  const state = store.getState();

  localStorage.setItem("store", JSON.stringify(state));
}

const unsubscribe = store.subscribe(saveInLocalStorage);

const initialState = JSON.parse(localStorage.getItem("store"));

if (initialState) {
  store.dispatch(actions.initialLoadBoards(initialState.boards));
  store.dispatch(actions.initialLoadCards(initialState.cards));
  store.dispatch(actions.initialLoadComments(initialState.comments));
  store.dispatch(actions.initialUser(initialState.auth));
}

export default class App extends Component {
  componentWillUnmount() {
    unsubscribe();
  }

  render() {
    return (
      <Provider store={store}>
        <Trello />
      </Provider>
    );
  }
}
