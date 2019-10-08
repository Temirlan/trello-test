import React from "react";
import styles from "./Card.module.css";
import ModalCard from "../../ModalCard/ModalCard";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  updateCardName = name => {
    this.props.updateCardName(name, this.props.card.id);
  };

  handleDelete = () => {
    this.props.deleteCard(this.props.card.id);
  };

  render() {
    const { name, userName } = this.props.card;

    return (
      <div className={styles.cardWrapper}>
        <div className={styles.card} onClick={this.handleClick}>
          <p>
            {userName}: {name}
          </p>
          <button onClick={this.handleDelete}>delete</button>
        </div>
        {this.state.open && (
          <ModalCard
            nameBoard={this.props.nameBoard}
            card={this.props.card}
            handleClick={this.handleClick}
            updateCardName={this.updateCardName}
          />
        )}
      </div>
    );
  }
}

export default Card;
