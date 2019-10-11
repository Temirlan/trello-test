import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.css";

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
    this.props.deleteCard();
  };

  renderModalCard = () => {
    return React.cloneElement(this.props.renderModalCard(), {
      handleClick: this.handleClick
    });
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
        {this.state.open && <>{this.renderModalCard()}</>}
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired,
  renderModalCard: PropTypes.func.isRequired
};

export default Card;
