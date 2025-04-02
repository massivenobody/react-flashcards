import { useState } from 'react';
import { Card } from '../data/cards';

function FlashCard({ card }: { card: Card }) {

    const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <div className='card'>
        <h2>{card.question}</h2>
      </div>
    </div>
  )
}

export default FlashCard;