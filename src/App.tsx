import './App.css'
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import FlashCard from './components/FlashCard'
import cards from './data/cards'

function App() {

  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  }

  const handlePreviousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  }

  return (
    <div className='app'>
      <h1>Flash Cards</h1>
      <ProgressBar />
      <FlashCard
        key={cards[currentCard].id}
        card={cards[currentCard]}
        onNextCard={handleNextCard}
        onPreviousCard={handlePreviousCard}
      />
    </div>
  )
}

export default App
