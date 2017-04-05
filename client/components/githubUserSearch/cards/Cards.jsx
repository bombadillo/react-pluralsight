import React from 'react';

import Card from './Card.jsx';

export default (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    )
}