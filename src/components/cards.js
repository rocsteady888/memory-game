import React from 'react';
import Card from './card.js';

const Cards = (props) => {
  return (
    <div>
      {
        props.colors.map((color) => (
          <Card
            key={color}
          />
        ))
      }
    </div>

  );
};

export default Cards;