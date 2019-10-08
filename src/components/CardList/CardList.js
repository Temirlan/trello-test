import React from "react";

import Card from "./Card/Card";
import styles from "./CardList.module.css";

const CardList = props => {
  const cards = props.cards.map(card => {
    return (
      <Card
        nameBoard={props.nameBoard}
        card={card}
        key={card.id}
        deleteCard={props.deleteCard}
      />
    );
  });

  return <div className={styles.cardList}>{cards}</div>;
};

export default CardList;
