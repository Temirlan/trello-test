import React from "react";
import Popup from "./components/Popup/Popup";
import BoardList from "./components/BoardList/BoardList";

import "./App.css";

import { getBoards } from "./redux/selectors";

import { connect } from "react-redux";

import BoardContainer from "./containers/BoardContainer";

const Trello = props => {
  return (
    <div className="App">
      {!props.auth && <Popup />}
      {props.auth && (
        <BoardList
          boards={props.boards}
          renderBoard={board => <BoardContainer board={board} />}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    auth: state.auth.auth,
    boards: getBoards(state)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trello);
