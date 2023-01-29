import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css'
import Card from './card/card';

const App = () => {
const cards = [
{
className: 'card-blue',
imgSrc: 'https://i.imgur.com/8JIWpnw.jpg',
imgAlt: 'Blue card image',
title: 'Card 1',
description: 'This is the first card.'
},
{
className: 'card-green',
imgSrc: 'https://i.imgur.com/ePJKs8Q.jpg',
imgAlt: 'Green card image',
title: 'Card 2',
description: 'This is the second card.'
},
{
className: 'card-red',
imgSrc: 'https://i.imgur.com/snffLH3.jpg',
imgAlt: 'Red card image',
title: 'Card 3',
description: 'This is the third card.'
}
]
return (
  <div>
  {cards.map((card, index) => {
  return <Card key={index} {...card} />
  })}
  </div>
  )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))