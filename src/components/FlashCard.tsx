import { useState } from 'react';

function FlashCard() {

    const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <div className='card'></div>
    </div>
  )
}

export default FlashCard;