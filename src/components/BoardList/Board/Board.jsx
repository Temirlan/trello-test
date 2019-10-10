import React from "react";
import styles from "./Board.module.css";
import Title from "../../Title/Title";
import AddCard from "../AddCard/AddCard";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleAddCard: false
    };
  }

  updateName = name => {
    this.props.updateBoardName(name);
  };

  addCard = name => {
    this.props.addCard(name);
  };

  handleCreateCard = () => {
    this.setState({
      toggleAddCard: true
    });
  };

  renderCardList = cards => {
    return React.cloneElement(this.props.renderCardList(cards), {
      cards
    });
  };

  render = () => {
    const { name, cards } = this.props.board;

    return (
      <div className={styles.board}>
        <Title name={name} updateName={this.updateName} />

        {this.renderCardList(cards)}

        {!this.state.toggleAddCard && (
          <button onClick={this.handleCreateCard}>Create card</button>
        )}

        {this.state.toggleAddCard && <AddCard addCard={this.addCard} />}
      </div>
    );
  };
}

export default Board;
