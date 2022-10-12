const defaultGridSize = 26

const board = document.getElementById('board')
const ratioBar = document.getElementById('ratio-bar')

ratioBar.addEventListener('click', changeRatio)

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
    e.target.style.backgroundColor = '#181818'
  }
}



function changeRatio() {
  if (ratioBar.value === "1") {
    makeGrid(16,16)
  } else if (ratioBar.value === "2") {
    makeGrid(26,26)
  } else if (ratioBar.value === "3") {
    makeGrid(36,36)
  } else if (ratioBar.value === "4") {
    makeGrid(46,46)
  } else if (ratioBar.value === "5") {
    makeGrid(56,56)
  }
}

window.onload = () => {
  makeGrid(defaultGridSize, defaultGridSize)
}
