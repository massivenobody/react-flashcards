import { useState } from 'react';
import { Card } from '../data/cards';

function FlashCard({ card, onNextCard, onPreviousCard }: { card: Card, onNextCard: () => void, onPreviousCard: () => void }) {

    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    const cardContent = flipped ? (<p>{card.answer}</p>) : (<h2>{card.question}</h2>);

  return (
    <div className='card'>
      <div className='card-content'>
        {cardContent}
      </div>
      <div className="card-controls">
        <button className="card-controls-nav" onClick={onPreviousCard}>&lt; Previous</button>
        <button className="card-controls-flip" onClick={handleFlip}>{flipped ? 'Hide Answer' : 'Show Answer'}</button>
        <button className="card-controls-nav" onClick={onNextCard}>Next &gt;</button>
      </div>
    </div>
  )
}

export default FlashCard;