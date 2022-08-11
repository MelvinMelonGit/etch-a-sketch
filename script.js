//create a grid of squares
const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', setNumberOfRows);

//prompt to set dynamic number of squares
function setNumberOfRows() { 
    rows = parseInt(prompt("How many rows would you want to grid to be?"));
    createGrid(rows);
}

function createGrid(number) {
    container.innerHTML = ''; // clear grid
    if (number > 100) return alert("Please select a value 100 or less"); // keep rows within 100 or less
    for (let i = 0; i < number*number; i++) { 
        container.appendChild(createSquare(number));
    }
}

function createSquare(number) {
    const square = document.createElement('div');
    square.classList.add('square');  
    square.style.height = `calc(100%/${number})`; // set proportional height to number of squares in grid
    square.style.width = `calc(100%/${number})`; // set proportional width to number of squares in grid
    return square;
}

//squares change colour on hover


//extra credit - random colour change, or adding more black 