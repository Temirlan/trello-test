import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./Board.module.css";

import Title from "../../Title/Title";
import AddCard from "../AddCard/AddCard";

import { updateBoardName, addCard } from "../../../redux/actions/boards";
import CardList from "../../CardList/CardList";
import Card from "../../CardList/Card/Card";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleAddCard: false
    };
  }

  updateName = name => {
    this.props.updateBoardName({
      idBoard: this.props.board.id,
      name
    });
  };

  addCard = name => {
    this.props.addCard({
      idBoard: this.props.board.id,
      userName: this.props.userName,
      name
    });
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

        <CardList
          cards={cards}
          renderCard={card => (
            <Card card={card} idBoard={this.props.board.id} />
          )}
        />

        {!this.state.toggleAddCard && (
          <button onClick={this.handleCreateCard}>Create card</button>
        )}

        {this.state.toggleAddCard && <AddCard addCard={this.addCard} />}
      </div>
    );
  };
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
  updateBoardName: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  renderCardList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userName: state.auth.userName
});

const mapDispatchToProps = { updateBoardName, addCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
