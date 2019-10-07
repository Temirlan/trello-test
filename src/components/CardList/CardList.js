import React from 'react';

import Card from './Card/Card';
import styles from './CardList.module.css';

const CardList = props => {
    const cards = props.cards.map(card => {
      return <Card />      
    });

    return (
        <div>
            {cards}
        </div>
    );
}

export default CardList;