import React from 'react';

import './Card.css';

const Card = ({ monster }) => (
  <div className='Card'>
    <img
      src={`https://robohash.org/${monster.name}?set=set2&size=180x180`}
      alt='Monster'
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export default Card;
