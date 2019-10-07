import React from 'react';
import styles from './Board.module.css';
import Title from '../../Title/Title';
import CardList from '../../CardList/CardList';

class Board extends React.Component {
    updateName = (name, id) => {
        this.props.updateBoardName(name, id);
    }

    createCard() {

    }

    render = () => {
        const { name, id, cards } = this.props.board;
       
        return (
            <div className={styles.board}>
                <Title name={name} id={id} updateName={this.updateName}/>
                <CardList cards={cards}/>
                <button>Create card</button>
            </div>
        );
    }
}

export default Board;