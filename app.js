window.onload = function(){
    let sketchContainer = document.querySelector('#container');
    //loop to make 256 divs 16x16 = 256
    for(let i = 0; i < 256; i++) {
        console.log('test')
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square'
        sketchContainer.append(gridSquare);
    }
    
    sketchContainer.addEventListener('mouseover', (e) => {
        console.log('hovering')
        if (e.target.classList.contains('grid-square')) {
            e.target.classList.add('change'); 
        }

    })
}

let newGridBtn = document.querySelector('#newGrid');
let sketchContainer = document.querySelector('#container');


newGridBtn.addEventListener('click', (e) => {
    sketchContainer.innerHTML = '';

    // Step 1: Get and validate user input
    let gridSize;
    while (true) {
      const input = prompt('Enter grid size (1-100). Example: 16 creates a 16x16 grid', '16');
      
      // User clicked "Cancel" or closed the prompt
      if (input === null) return; // Exit the function
      
      gridSize = parseInt(input);
      
      // Check if input is a number AND within 1-100 range
      if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
        break; // Valid input, exit the loop
      }
      
      // Show error for invalid input
      alert('Please enter a number between 1 and 100.');
    }
  
    // Step 2: Calculate square sizes
    const containerSize = sketchContainer.clientWidth;
    const squareSize = containerSize / gridSize;
  
    // Step 3: Generate grid
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement('div');
      square.className = 'grid-square';
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      sketchContainer.appendChild(square);
    }
    
});