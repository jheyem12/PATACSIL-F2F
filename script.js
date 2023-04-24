const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

function handleClick(event) {
  const square = event.target;
  if (square.textContent !== '') {
    return;
  }
  square.textContent = currentPlayer;
  if (checkForWin()) {
    alert(`${currentPlayer} wins!`);
    reset();
    return;
  }
  if (checkForDraw()) {
    alert('Draw!');
    reset();
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a].textContent !== '' && squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  for (let square of squares) {
    if (square.textContent === '') {
      return false;
    }
  }
  return true;
}

function reset() {
  squares.forEach(square => square.textContent = '');
  currentPlayer = 'X';
}
