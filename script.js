//create 16 squares
const container = document.querySelector('.container');

for (let i = 0; i < 30*30 ; i++) { 
    const square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square);
}

//squares change colour on hover

//prompt to set dynamic number of squares

//extra credit - random colour change, or adding more black 