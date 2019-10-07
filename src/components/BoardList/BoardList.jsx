import React from 'react';
import styles from './BoardList.module.css';

const BoardList = props => {
    const renderBoards = () => {
        return props.boards.map(board => {
            return React.cloneElement(props.renderBoard(board), {
                key: board.id,
                board
            })
        });
    }

    return (
        <div className={styles.boardList}>
            {renderBoards()}
        </div>
    );
}

export default BoardList;