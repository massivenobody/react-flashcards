import './App.css'
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import FlashCard from './components/FlashCard'
import cards from './data/cards'

function App() {

  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className='app'>
      <h1>Flash Cards</h1>
      <ProgressBar />
      <FlashCard card={cards[currentCard]} />
    </div>
  )
}

export default App
