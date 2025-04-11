console.log("Starting");
containerElem = document.querySelector(".container");
const NUM_ROWS = 16;
const NUM_COLS = 16;

let grid = [];

// build the grid of divs
for (let row = 0; row < NUM_ROWS; row++) {
    let rowElem = document.createElement("div");
    rowElem.className = 'row';
    let rowElemArray = [];
    for (let col = 0; col < NUM_COLS; col++) {
        let cellElem = createCell(row, col);
        rowElemArray.push(cellElem);
        rowElem.appendChild(cellElem);
    }
    containerElem.appendChild(rowElem);
    grid.push(rowElemArray);
    
}

function createCell(row, col) {
    const cellElem =  document.createElement('div');
    cellElem.classList.add("cell")
    cellElem.classList.add(`cell-${row}-${col}`);
    cellElem.addEventListener('mouseover', (e) => {
        cellElem.style.backgroundColor = "white";
    });
    return cellElem;
}