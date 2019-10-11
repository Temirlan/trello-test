import React from "react";
import PropTypes from "prop-types";

import styles from "./CardList.module.css";

const CardList = props => {
  const renderCard = () => {
    return props.cards.map(card => {
      return React.cloneElement(props.renderCard(card), {
        key: card.id,
        card
      });
    });
  };

  return <div className={styles.cardList}>{renderCard()}</div>;
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  renderCard: PropTypes.func.isRequired
};

export default CardList;
