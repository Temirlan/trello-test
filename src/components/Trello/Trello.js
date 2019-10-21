import React from "react";
import { connect } from "react-redux";

import "./Trello.module.css";

import Popup from "../Popup/Popup";
import BoardList from "../BoardList/BoardList";
import { getBoards } from "../../redux/selectors";

import BoardContainer from "../../containers/BoardContainer";

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
