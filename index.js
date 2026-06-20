const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'inline-block';
gridContainer.style.overflow = 'hidden'; 
gridContainer.style.width = '960px'; 
gridContainer.style.height = '960px';
gridContainer.style.border = '5px solid black'; 

for (let row = 0; row < 16; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.style.display = 'flex';

  for (let col = 0; col < 16; col++) {
    const cell = document.createElement('div');
    cell.style.width = '40px';
    cell.style.height = '40px';
    cell.style.border = '1px solid black'; 
    cell.style.padding = '1px';
    rowDiv.appendChild(cell);
  }

  gridContainer.appendChild(rowDiv);
}

gridContainer.addEventListener('mouseover', function(event) {
  if (event.target !== gridContainer) {
      event.target.style.background = 'black';
  }
})