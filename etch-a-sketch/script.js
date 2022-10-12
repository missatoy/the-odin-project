const container = document.querySelector('#container');
const hover = document.getElementById('hover');

const times = 16

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for ( i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute('id', 'hover')
  }
}

makeGrid(16, 16);


function changeCellColor(color) {
  cell.style.backgroundColor = `${color}`
}

hover.addEventListener('click', changeCellColor(blue))
