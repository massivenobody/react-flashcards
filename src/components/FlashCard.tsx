import { useState } from 'react';
import { Card } from '../data/cards';

function FlashCard({ card }: { card: Card }) {

    const [flipped, setFlipped] = useState(false);

  return (
    <div className='card'>
      <div className='card-content'>
        <h2>{card.question}</h2>
      </div>
    </div>
  )
}

export default FlashCard;