import './App.css'
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import FlashCard from './components/FlashCard'
import cards from './data/cards'

function App() {

  const [currentCard, setCurrentCard] = useState(0);

  const hasNextCard = currentCard < cards.length - 1;
  const hasPreviousCard = currentCard > 0;

  const nextCard = {
    exists: hasNextCard,
    go: () => {if (hasNextCard) setCurrentCard(currentCard + 1)}
  }

  const previousCard = {
    exists: hasPreviousCard,
    go: () => {if (hasPreviousCard) setCurrentCard(currentCard - 1)}
  }

  return (
    <div className='app'>
      <h1>Flash Cards</h1>
      <ProgressBar />
      <FlashCard
        key={cards[currentCard].id}
        card={cards[currentCard]}
        nextCard={nextCard}
        previousCard={previousCard}
      />
    </div>
  )
}

export default App
