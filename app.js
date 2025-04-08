let sketchContainer = document.querySelector('#container');

window.onload = function(){

    //loop to make 256 divs 16x16 = 256
    for(let i = 0; i < 256; i++) {
        console.log('test')
        let gridSquare = document.createElement('div');

        gridSquare.id = 'gridSquares';
        
        //gridSquare.textContent = 'testing'

        sketchContainer.append(gridSquare);
    }

}