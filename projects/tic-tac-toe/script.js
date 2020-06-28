const Player = function(name, symbol, score) {
  return {name, symbol, score};
}
let playerOne = new Player(document.getElementById('oneName').value, 'x', 0);
let playerTwo = new Player(document.getElementById('twoName').value, 'o', 0);
const gameplay = (() => {
  let turn = 1;
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
    let winner;
    winCombinations.forEach(function(array) {
      if (board[array[0]] === 'x' && board[array[1]] === 'x' && board[array[2]] === 'x') {
        if (playerOne.name) {
          winner = playerOne.name;
        } else {
          winner = 'player one';
        }
        if (winner) {
          displayWinner(winner);
        }
        playerOne.score += 1;
        document.getElementById('oneScore').innerHTML = playerOne.score;
      } else if (board[array[0]] === 'o' && board[array[1]] === 'o' && board[array[2]] === 'o') {
        if (playerTwo.name) {
          winner = playerTwo.name;
        } else {
          winner = 'player two';
        }
        if (winner) {
          displayWinner(winner);
        }
        playerTwo.score += 1;
        document.getElementById('twoScore').innerHTML = playerTwo.score;
        playerTwo.score += 1;
      } else if (board['1'] && board['2'] && board['3'] && board['4'] && board['5'] && board['6'] && board['7'] && board['8'] && board['9']) {
        winner = 'tie';
        if (winner) {
          displayWinner(winner);
        }
      }
    })
  }
  const displayWinner = function(winner) {
    const x = document.getElementById('winMessage');
    if (winner === 'tie') {
      x.innerHTML = 'TIE!';
    } else {
      x.innerHTML = `${winner} is the winner!`;
    }
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
    render();
  }
  const restart = function() {
    playerOne.score = 0;
    playerTwo.score = 0;
    document.getElementById('oneScore').innerHTML = playerOne.score;
    document.getElementById('twoScore').innerHTML = playerTwo.score;
    const x = document.getElementById('htmlBoard');
    clearBoard(x);
  }
  const commitPlay = function() {
    if (!(board[event.target.id])) {
      if (turn % 2 === 0) {
        event.target.className = 'x';
        event.target.style.cursor = 'not-allowed';
        board[event.target.id] = 'x';
      } else {
        event.target.className = 'o';
        event.target.style.cursor = 'not-allowed';
        board[event.target.id] = 'o';
      }
      checkWinner();
      turn += 1;
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
  return {render, restart, refresh};
})();

document.getElementById('clearBoard').addEventListener('click', gameplay.refresh);
document.getElementById('newGame').addEventListener('click', gameplay.restart);
window.onload = function () {
  gameplay.render();
};
