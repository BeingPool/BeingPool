// INITIALIZATION
const board = document.getElementById('chessboard');
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let tileArray = [];
let pieceAreaArray = [];
const createBoardTiles = function() {
  for (let i = 1; i <= 64; i += 1) {
    let tile = document.createElement('div');
    let area = alphabet[Math.floor((i - 1)/ 8)] + (((i - 1)% 8) + 1);
    tile.style.gridArea = area;
    if ((Math.floor(((i - 1) / 8) + 1) + (((i - 1) % 8) + 1)) % 2 === 0) {
      tile.style.backgroundColor = 'lightGrey';
    } else {
      tile.style.backgroundColor = 'darkGrey';
    };
    tile.style.height = '100%';
    tile.style.width = '100%';
    tile.style.position = 'absolute';
    board.appendChild(tile);
    tileArray.push(area);
    let piece = document.createElement('div');
    if (area[1] === '8' || area[1] === '7') {
      piece.className = 'piece black';
      if (area[1] === '7') {
        piece.style.backgroundImage = 'url(pawn.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'a' || area[0] === 'h') {
        piece.style.backgroundImage = 'url(rook.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'b' || area[0] === 'g') {
        piece.style.backgroundImage = 'url(knight.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'c' || area[0] === 'f') {
        piece.style.backgroundImage = 'url(bishop.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'd') {
        piece.style.backgroundImage = 'url(queen.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'e') {
        piece.style.backgroundImage = 'url(king.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      }
    } else if (area[1] === '1' || area[1] === '2') {
      piece.className = 'piece white';
      if (area[1] === '2') {
        piece.style.backgroundImage = 'url(pawn.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'a' || area[0] === 'h') {
        piece.style.backgroundImage = 'url(rook.svg)';
        piece.style.gridArea = area;
        pieceAreaArray.push(area);
        board.appendChild(piece);
      } else if (area[0] === 'b' || area[0] === 'g') {
        piece.style.backgroundImage = 'url(knight.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'c' || area[0] === 'f') {
        piece.style.backgroundImage = 'url(bishop.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'e') {
        piece.style.backgroundImage = 'url(queen.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      } else if (area[0] === 'd') {
        piece.style.backgroundImage = 'url(king.svg)';
        piece.style.gridArea = area;
        board.appendChild(piece);
        pieceAreaArray.push(area);
      }
    }
  }
}
createBoardTiles();
let allPieces = board.getElementsByClassName('piece');
let whitePieces = board.getElementsByClassName('white');
console.log(allPieces);
let blackPieces = board.getElementsByClassName('black');
// GAMEPLAY
const getOpenTiles = function() {
  let openTileArray = tileArray;
  let arr = [];
  openTileArray.forEach(function(currentTile, currentTileIndex) {
    if (pieceAreaArray.includes(currentTile)) {
      arr.push(currentTileIndex);
    };
  })
  arr = arr.reverse();
  arr.forEach(function(x) {
    openTileArray.splice(x, 1);
  })
  openTileArray.forEach(function(value, index) {
    let position = value;
    let letterIndex = alphabet.findIndex(function(letter) {
      return letter === position[0];
    });
    letterIndex += 1;
    openTileArray[index] = [letterIndex, Number(position[1])];
  })
  return openTileArray;
}
const getPieceColor = function(element) {
  if (window.getComputedStyle(element).getPropertyValue('border-block-end-color') === 'rgb(255, 255, 255)') {
    return 'white';
  } else {
    return 'black';
  }
}
const getPiecePosition = function(element) {
  let position = window.getComputedStyle(element).getPropertyValue('grid-row-start');
  let letterIndex = alphabet.findIndex(function(letter) {
    return letter === position[0];
  });
  letterIndex += 1;
  return [letterIndex, Number(position[1])];
}
const getPieceType = function(element) {
  let splitArray = window.getComputedStyle(element).getPropertyValue('background-image').split('/');
  return splitArray[splitArray.length - 1].split('.')[0];
}
const getPossiblePawnMovements = function(position, color) {
  let possibleMovements;
  if (color === 'white') {
    let initial = [[position[0], position[1] + 1], [position[0], position[1] + 2], [position[0] + 1, position[1] + 1], [position[0] - 1, position[1] + 1]];
    initial = initial.filter(function(value) {
      return value[0] > 0 && value[0] < 8 && value[1] > 0 && value[1] < 8;
    })

  } else {
    let initial = [[position[0], position[1] - 1], [position[0], position[1] - 2], [position[0] + 1, position[1] - 1], [position[0] - 1, position[1] - 1]];
    initial = initial.filter(function(value) {
      return value[0] > 0 && value[0] < 8 && value[1] > 0 && value[1] < 8;
    })
    possibleMovements = initial;
  }
  return possibleMovements;
}
// const asdf = function(asdf) {
//   Object.keys(allPieces).forEach(function(piece) {
//     if (getPiecePosition(allPieces[piece]) == position) {
//
//     }
//   })
// }
// the actual gameplan
// my goal is to write an amount of code that will allow me to
// 1) actually select a piece
// 2) have some sort of visual indicator that shows where that piece can move
//
// how I will do that is by
// 1) adding event listeners for each piece that will call a function
// 2) having said function take in four parameters: type of piece, color(for the direction of the movement), current position, and open tiles
// 3)
