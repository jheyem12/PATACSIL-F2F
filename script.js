let selectedCards = [];
let matchedCards = [];

// Shuffle the cards
const cards = Array.from(document.querySelectorAll('.card'));
shuffle(cards);
cards.forEach(card => {
  document.getElementById('game-board').appendChild(card);
});

// Add click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // If the card is already matched or selected, do nothing
    if (matchedCards.includes(card) || selectedCards.includes(card)) {
      return;
    }
    
    // Reveal the card
    card.classList.add('selected');
    selectedCards.push(card);
    
    // Check if two cards are selected
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      
      // Check if the cards match
      if (card1.dataset.card === card2.dataset.card) {
        card1.classList.remove('selected');
        card1.classList.add('matched');
        matchedCards.push(card1);
        
        card2.classList.remove('selected');
        card2.classList.add('matched');
        matchedCards.push(card2);
        
        // Check if the game has been won
        if (matchedCards.length === cards.length) {
          alert('Congratulations, you won!');
        }
      } else {
        // If the cards don't match, hide them again
        setTimeout(() => {
          card1.classList.remove('selected');
          card2.classList.remove('selected');
          selectedCards = [];
        }, 1000);
      }
    }
  });
});

// Shuffle an array using the Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
