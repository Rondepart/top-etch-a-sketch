const grid = document.querySelector(".grid-container");

for (let row = 0; row < 16; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.style.display = 'flex';

  for (let col = 0; col < 16; col++) {
    const cell = document.createElement('div');
    cell.style.width = '40px';
    cell.style.height = '40px';
    cell.style.border = '1px solid black'; 
    cell.style.margin = '1px';
    rowDiv.appendChild(cell);
  }

  grid.appendChild(rowDiv);
}