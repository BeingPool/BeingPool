const Player = function(name, symbol, score) {
  return {name, symbol, score};
}
let playerOne = new Player(document.getElementById('oneName').value, 'x', 0);
let playerTwo = new Player(document.getElementById('twoName').value, 'o', 0);
const gameplay = (() => {
  let turn = 'x';
  const board = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  }
  const checkWinner = function() {
    let winCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];
    winCombinations.forEach(function(array) {
      let x = 0;
      Object.keys(board).forEach(function(key) {
        if (board[key]) {
          x += 1;
        }
      })
      if (board[array[0]] === 'x' && board[array[1]] === 'x' && board[array[2]] === 'x') {
        displayWinner(playerOne.name ? playerOne.name : 'Player One');
        playerOne.score += 1;
        document.getElementById('oneScore').innerHTML = playerOne.score;
      } else if (board[array[0]] === 'o' && board[array[1]] === 'o' && board[array[2]] === 'o') {
        displayWinner(playerOne.name ? playerTwo.name : 'Player Two');
        playerTwo.score += 1;
        document.getElementById('twoScore').innerHTML = playerTwo.score;
      } else if (x === 9) {
        displayWinner(false);
      };
    })
  }
  const displayWinner = function(winner) {
    const x = document.getElementById('winMessage');
    x.innerHTML = winner ? `${winner} is the winner!` : 'TIE!';
    x.style.display = 'flex';
    x.addEventListener('click', refresh);
  }
  const refresh = function() {
    const x = document.getElementById('htmlBoard');
    while (x.firstChild) {
      x.removeChild(x.lastChild)
    }
    for (i = 1; i < 10; i++) {
      board[i] = '';
    };
    document.getElementById('winMessage').style.display = 'none';
    turn = 'x';
    render();
  }
  const restart = function() {
    playerOne.score = 0;
    playerTwo.score = 0;
    document.getElementById('oneScore').innerHTML = playerOne.score;
    document.getElementById('twoScore').innerHTML = playerTwo.score;
    const x = document.getElementById('htmlBoard');
    clearBoard(x);
    turn = 'x';
  }
  const commitPlay = function() {
    if (!(board[event.target.id])) {
      if (turn === 'x') {
        event.target.className = 'x';
        event.target.style.cursor = 'not-allowed';
        board[event.target.id] = 'x';
        turn = 'o';
      } else {
        event.target.className = 'o';
        event.target.style.cursor = 'not-allowed';
        board[event.target.id] = 'o';
        turn = 'x';
      }
      checkWinner();
    }
  }
  const render = function() {
    for (i = 1; i <= 9; i++) {
      let tile = document.createElement('div');
      tile.id = i;
      document.getElementById('htmlBoard').appendChild(tile);
      tile.addEventListener('click', commitPlay);
    }
  }
  return {board, render, restart, refresh};
})();

document.getElementById('clearBoard').addEventListener('click', gameplay.refresh);
document.getElementById('newGame').addEventListener('click', gameplay.restart);
window.onload = function () {
  gameplay.render();
};
