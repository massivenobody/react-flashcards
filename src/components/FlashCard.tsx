import { useState } from 'react';
import { Card } from '../data/cards';

function FlashCard({ card, nextCard, previousCard }: { card: Card, nextCard: { exists: boolean, go: () => void }, previousCard: { exists: boolean, go: () => void } }) {

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
        {previousCard.exists ? <button className="card-controls-nav" onClick={previousCard.go}>&lt; Previous</button> : <div></div>}
        <button className="card-controls-flip" onClick={handleFlip}>{flipped ? 'Hide Answer' : 'Show Answer'}</button>
        {nextCard.exists ? <button className="card-controls-nav" onClick={nextCard.go}>Next &gt;</button> : <div></div>}
      </div>
    </div>
  )
}

export default FlashCard;