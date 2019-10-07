import React from "react";
import styles from "./Card.module.css";
import ModalWindow from "../../Modal/ModalWindow";

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

  render() {
    const { name, userName } = this.props.card;

    return (
      <div className={styles.card}>
        <p>
          {userName}: {name}
        </p>
        <button onClick={this.handleClick}>open</button>
        {this.state.open && (
          <ModalWindow card={this.props.card} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default Card;
