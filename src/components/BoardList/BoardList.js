import React from "react";
import PropTypes from "prop-types";

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

export default BoardList;
