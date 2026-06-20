const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'flex';
gridContainer.style.flexDirection = 'column';
gridContainer.style.overflow = 'hidden'; 
gridContainer.style.width = '960px';
gridContainer.style.height = '960px';
gridContainer.style.border = '5px solid black';

for (let row = 0; row < 16; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  rowDiv.style.display = 'flex';
  rowDiv.style.flex = '1';
  rowDiv.style.width = '100%';

  for (let col = 0; col < 16; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.flex = '1';
    cell.style.border = '1px solid black';
    cell.style.boxSizing = 'border-box';
    rowDiv.appendChild(cell);
  }

  gridContainer.appendChild(rowDiv);
}

gridContainer.addEventListener('mouseover', function(event) {
  if (event.target !== gridContainer) {
      event.target.style.background = 'black';
  }
})