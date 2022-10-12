const container = document.querySelector('#container');


const times = 16

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for ( i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('click', changeCellColor);
    container.appendChild(cell);
  }
}

function changeCellColor(color) {
  console.log(color)
}

makeGrid(16, 16);
