//create a grid of squares
const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', setNumberOfRows);

//prompt to set dynamic number of squares
function setNumberOfRows() { 
    rows = parseInt(prompt("How many rows would you want to grid to be?"));
    createGrid(rows);
}

function createGrid(rows) {
    container.innerHTML = ''; // clear grid
    if (rows > 100) return alert("Please select a value 100 or less"); // keep rows within 100 or less
    for (let i = 0; i < (rows * rows); i++) { 
        container.appendChild(createSquare(rows));
    }
}

function createSquare(rows) {
    const square = document.createElement('div');
    square.classList.add('square');  
    square.style.height = `calc(100%/${rows})`; // set proportional height to number of squares in grid
    square.style.width = `calc(100%/${rows})`; // set proportional width to number of squares in grid
    return square;
}

//squares change colour on hover


//extra credit - random colour change, or adding more black 