const cells = document.querySelectorAll('td');
let currentPlayer = 'X';

function handleCellClick(e) {
	const cell = e.target;
	if (cell.textContent !== '') return;
	cell.textContent = currentPlayer;
	cell.classList.add(currentPlayer);
	if (checkWin()) {
		alert(`Player ${currentPlayer} wins!`);
		resetGame();
		return;
	}
	if (checkDraw()) {
		alert(`It's a draw!`);
		resetGame();
		return;
	}
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	return winningCombos.some(combo => {
		return combo.every(index => {
			return cells[index].classList.contains(currentPlayer);
		});
	});
}

function checkDraw() {
	return [...cells].every(cell => {
		return cell.textContent !== '';
	});
}

function resetGame() {
	[...cells].forEach(cell => {
		cell.textContent = '';
		cell.classList.remove('X', 'O');
	});
	currentPlayer = 'X';
}

cells.forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});
