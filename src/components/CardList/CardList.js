import React from "react";

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

export default CardList;
