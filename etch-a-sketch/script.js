// const board = document.getElementById('board') ???

const times = 16;

function makeGrid(rows, cols) {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);
  for ( i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', changeCellColor);
    cell.addEventListener('mouseout', changeCellColor);
    board.appendChild(cell);
  }
}

let mouseClick = false;
document.body.onmousedown = () => (mouseClick = true);
document.body.onmouseup = () => (mouseClick = false);

function changeCellColor(e) {
  // console.log(e)
  if (e.type === "mouseover" && mouseClick === true) {
    e.target.style.backgroundColor = 'pink'
  }
}

makeGrid(16, 16);
