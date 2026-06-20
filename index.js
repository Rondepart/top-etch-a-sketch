const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'flex';
gridContainer.style.flexDirection = 'column';
gridContainer.style.overflow = 'hidden'; 
gridContainer.style.width = '960px';
gridContainer.style.height = '960px';
gridContainer.style.border = '5px solid black';

function generateGridCells(cellCount) {
  gridContainer.replaceChildren();

  for (let row = 0; row < cellCount; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style.display = 'flex';
    rowDiv.style.flex = '1';
    rowDiv.style.width = '100%';

  for (let col = 0; col < cellCount; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.flex = '1';
    cell.style.border = '1px solid black';
    cell.style.boxSizing = 'border-box';
    cell.dataset.opacity = 0;
    rowDiv.appendChild(cell);
  }

    gridContainer.appendChild(rowDiv);
  }
} 

generateGridCells(16);

gridContainer.addEventListener('mouseover', function(event) {
  if (!event.target.classList.contains('cell')) return;

  const cell = event.target;
  let opacity = parseFloat(cell.dataset.opacity) || 0;

  if (opacity < 1) {
    opacity = parseFloat((opacity + 0.1).toFixed(1));
    cell.dataset.opacity = opacity;
    cell.style.background = `rgba(0, 0, 0, ${opacity})`;
  }
})

document.querySelector('.change-canvas-size').addEventListener('click', function(event) {
  const input = prompt('Enter grid count. (Max 100)');
  const cellCount = Number(input);

  if (input === null) return;

  if (isNaN(cellCount) || input.trim() === '') {
    alert('Please enter a valid number!');
  } else if (cellCount > 100){
    alert('Max grid size is 100!');
  } else {
    generateGridCells(cellCount);
  }
})