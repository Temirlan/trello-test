import React from 'react';

import Board from './Board/Board';
import styles from './BoardList.module.css';

const BoardList = props => {
    const boards = props.boards.map(board => {
        return <Board key={board.id} name={board.name} id={board.id} updateBoardName={props.updateBoardName}/>
    })

    return (
        <div className={styles.boardList}>
            {boards}
        </div>
    );
}

export default BoardList;