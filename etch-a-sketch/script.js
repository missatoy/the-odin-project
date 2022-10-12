const defaultGridSize = 26

const board = document.getElementById('board')
const ratioBar = document.getElementById('ratio-bar')

const times = 26;

function makeGrid(rows, cols) {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);
  board.innerHTML = '' // Cleaning the board so it doesn't accumulate
  for ( i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', changeCellColor);
    cell.addEventListener('mouseout', changeCellColor);
    board.appendChild(cell);
  }
}

// Press and hold
let mouseClick = false;
document.body.onmousedown = () => (mouseClick = true);
document.body.onmouseup = () => (mouseClick = false);


function changeCellColor(e) {
  if (e.type === "mouseover" && mouseClick === true) {
    e.target.style.backgroundColor = 'pink'
  }
}

ratioBar.addEventListener('click', changeRatio)


function changeRatio() {
  if (ratioBar.value === "1") {
    makeGrid(16,16)
  } else if (ratioBar.value === "2") {
    makeGrid(21,21)
  } else if (ratioBar.value === "3") {
    makeGrid(26,26)
  } else if (ratioBar.value === "4") {
    makeGrid(31,31)
  } else if (ratioBar.value === "5") {
    makeGrid(36,36)
  }
}

window.onload = () => {
  makeGrid(defaultGridSize, defaultGridSize)
}
