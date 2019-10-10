import React from "react";

import Card from "./Card/Card";
import styles from "./CardList.module.css";

const CardList = props => {
  const cards = props.cards.map(card => {
    return (
      <Card
        nameBoard={props.nameBoard}
        addCardDescription={props.addCardDescription}
        card={card}
        key={card.id}
        deleteCard={props.deleteCard}
        updateCardName={props.updateCardName}
        addCommentCard={props.addCommentCard}
      />
    );
  });

  return <div className={styles.cardList}>{cards}</div>;
};

export default CardList;
