// Set the starting player
let currentPlayer = "x";
// Set a flag to indicate whether the game has ended
let gameEnded = false;

// Function to check if three cells match
function checkRowCol(cell1, cell2, cell3) {
    return cell1 === cell2 && cell2 === cell3 && cell1 !== "";
}

// Function to check if the game has been won
function checkWin() {
    const cells = document.getElementsByClassName("cell");
    // Check for horizontal wins
    for (let i = 0; i < 7; i += 3) {
        if (checkRowCol(cells[i].innerHTML, cells[i + 1].innerHTML, cells[i + 2].innerHTML)) {
            return true;
        }
    }
    // Check for vertical wins
    for (let i = 0; i < 3; i++) {
        if (checkRowCol(cells[i].innerHTML, cells[i + 3].innerHTML, cells[i + 6].innerHTML)) {
            return true;
        }
    }
    // Check for diagonal wins
    if (checkRowCol(cells[0].innerHTML, cells[4].innerHTML, cells[8].innerHTML)
        || checkRowCol(cells[2].innerHTML, cells[4].innerHTML, cells[6].innerHTML)) {
            return true;
        }
    }
    // No win
    return false;


// Function to check if the game is a tie
function checkTie() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

// Function to display a message to the player(s)
function showMessage(message) {
    document.getElementById("message").innerHTML = message;
}

// Function to handle a cell being clicked
function cellClicked() {
    // If the game has ended, do nothing
    if (gameEnded) {
        return;
    }
    // If the cell is already occupied, do nothing
    if (this.innerHTML !== "") {
        return;
    }
    // Place the current player's mark on the cell
    this.innerHTML = currentPlayer;
    // Check for a win or tie
    if (checkWin()) {
        showMessage(`Player ${currentPlayer} wins!`);
        gameEnded = true;
        return;
    }
    if (checkTie()) {
        showMessage("Tie game!");
        gameEnded = true;
        return;
    }
    // Switch to the other player
    currentPlayer = currentPlayer === "x" ? "o" : "x";
    // Display the current player's mark in the message
    showMessage(`Player ${currentPlayer}'s turn`);
}

// Add a click listener to each cell
const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

// Display the starting message
showMessage(`Player ${currentPlayer}'s turn`);
