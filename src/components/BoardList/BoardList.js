import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./BoardList.module.css";

const BoardList = props => {
  const renderBoards = () => {
    return props.boards.map(board => {
      return React.cloneElement(props.renderBoard(board), {
        key: board.id,
        board
      });
    });
  };

  return <div className={styles.boardList}>{renderBoards()}</div>;
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    boards: state.boardList.boards
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardList);
