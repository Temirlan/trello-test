import React from "react";
import styles from "./Board.module.css";
import Title from "../../Title/Title";
import CardList from "../../CardList/CardList";
import AddCard from "../AddCard/AddCard";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleAddCard: false
    };
  }

  updateName = (name, id) => {
    this.props.updateBoardName(name, id);
  };

  updateCardName = (name, idCard) => {
    this.props.updateCardName(name, this.props.board.id, idCard);
  };

  addCardDescription = (text, idCard) => {
    this.props.addCardDescription(text, this.props.board.id, idCard);
  };

  addCard = name => {
    this.props.addCard(name, this.props.board.id);
  };

  deleteCard = idCard => {
    this.props.deleteCard(this.props.board.id, idCard);
  };

  addCommentCard = (textComment, idCard) => {
    this.props.addCommentCard(textComment, this.props.board.id, idCard);
  };

  handleCreateCard = () => {
    this.setState({
      toggleAddCard: true
    });
  };

  render = () => {
    const { name, id, cards } = this.props.board;

    return (
      <div className={styles.board}>
        <Title name={name} id={id} updateName={this.updateName} />
        <CardList
          cards={cards}
          nameBoard={name}
          deleteCard={this.deleteCard}
          updateCardName={this.updateCardName}
          addCardDescription={this.addCardDescription}
          addCommentCard={this.addCommentCard}
        />
        {!this.state.toggleAddCard && (
          <button onClick={this.handleCreateCard}>Create card</button>
        )}
        {this.state.toggleAddCard && <AddCard addCard={this.addCard} />}
      </div>
    );
  };
}

export default Board;
