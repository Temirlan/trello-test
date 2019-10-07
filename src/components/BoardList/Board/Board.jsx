import React from 'react';
import styles from './Board.module.css';
import Title from '../../Title/Title';

class Board extends React.Component {
    updateName = (name, id) => {
        this.props.updateBoardName(name, id);
    }

    render = () => {
        const { name, id } = this.props.board;

        return (
            <div className={styles.board}>
                <Title name={name} id={id} updateName={this.updateName}/>
            </div>
        );
    }
}

export default Board;