//create 16 squares
const container = document.querySelector('.container');

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square);
}

function createGrid(number) {
    for (let i = 0; i < number*number ; i++) { 
    createSquare();
}
}

createGrid(30);

//squares change colour on hover

//prompt to set dynamic number of squares

//extra credit - random colour change, or adding more black 