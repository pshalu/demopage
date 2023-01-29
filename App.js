import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import index from 'index';

const App = () => {
const cards = [
{
className: 'card-blue',
imgSrc: 'https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg',
imgAlt: 'Blue card image',
title: 'Card 1',
description: 'This is the first card.'
},
{
className: 'card-green',
imgSrc: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
imgAlt: 'Green card image',
title: 'Card 2',
description: 'This is the second card.'
},
{
className: 'card-red',
imgSrc: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
 
