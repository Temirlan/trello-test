import React from "react";
import styles from "./Card.module.css";
import ModalWindow from "../../ModalCard/ModalCard";

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

  handleDelete = () => {
    this.props.deleteCard(this.props.card.id);
  };

  render() {
    const { name, userName } = this.props.card;

    return (
      <div className={styles.card}>
        <p>
          {userName}: {name}
        </p>
        <button onClick={this.handleClick}>open</button>
        <button onClick={this.handleDelete}>delete</button>
        {this.state.open && (
          <ModalWindow
            nameBoard={this.props.nameBoard}
            card={this.props.card}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}

export default Card;
