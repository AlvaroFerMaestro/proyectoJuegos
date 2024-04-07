import "./memori.css";
import { inicio } from "../../components/Pagina-Inicio/incio";

export const initializeMemoryGame = (divApp) => {
  const gameContainer = document.createElement('div');
  gameContainer.id = 'game-container';
  divApp.appendChild(gameContainer);

  const buttonInicio = document.createElement("button");
  buttonInicio.classList = "botonInicio1";
  buttonInicio.textContent = "Inicio";
  buttonInicio.addEventListener("click", () => {
      inicio(divApp);
  });
  gameContainer.appendChild(buttonInicio)

  const memoryGame = document.createElement('div');
  memoryGame.id = 'memory-game';
  gameContainer.appendChild(memoryGame);

  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = [...symbols, ...symbols];

  let flippedCount = 0;
  let isProcessing = false;
  let firstFlippedCard = null;

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const revealCard = (card) => {
    if (isProcessing || card.classList.contains('flipped') || card.classList.contains('matched')) {
      return;
    }

    card.classList.add('flipped');
    flippedCount++;

    if (flippedCount === 1) {
      firstFlippedCard = card;
    } else if (flippedCount === 2) {
      isProcessing = true;

      const secondFlippedCard = card;

      setTimeout(() => {
        if (firstFlippedCard.textContent === secondFlippedCard.textContent) {
          firstFlippedCard.classList.add('matched');
          secondFlippedCard.classList.add('matched');
        } else {
          firstFlippedCard.classList.remove('flipped');
          secondFlippedCard.classList.remove('flipped');
        }

        checkWin();
        flippedCount = 0;
        isProcessing = false;
        firstFlippedCard = null;
      }, 1000);
    }
  };

  const checkWin = () => {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
      alert('¡Has ganado!');
      resetGame();
    }
  };



  const resetGame = () => {
    memoryGame.innerHTML = '';
    startGame();
  };

  const startGame = () => {
    shuffleCards();

    for (let i = 0; i < cards.length; i++) {
      const symbol = cards[i];
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = symbol;
      card.addEventListener('click', () => revealCard(card));

      memoryGame.appendChild(card);
    }
  };

  startGame();
};