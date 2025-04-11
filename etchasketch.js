console.log("Starting");

let grid = [];
let numRows = 16;
let numCols = 16;
const bodyElem = document.querySelector('body');
const containerElem = document.querySelector('.container');
const rowInputElem = document.querySelector('.rows');
const columnInputElem = document.querySelector('.columns');
const resetButtonElem = document.querySelector('.reset');

rowInputElem.value = numRows;
columnInputElem.value = numCols;

resetButtonElem.addEventListener('click', (e) => {
    numRows = Math.min(rowInputElem.value, 100);
    numCols = Math.min(columnInputElem.value, 100);
    buildGrid();
    rowInputElem.value = numRows;
    columnInputElem.value = numCols;
});

function buildGrid() {
    // const width = window.innerWidth - bodyElem.style.paddingLeft - bodyElem.style.paddingRight;

    while (containerElem.firstChild) {
        containerElem.firstChild.remove()
    }

    // build the grid of divs
    for (let row = 0; row < numRows; row++) {
        let rowElem = document.createElement("div");
        rowElem.className = 'row';
        let rowElemArray = [];
        for (let col = 0; col < numCols; col++) {
            let cellElem = createCell(row, col);
            rowElemArray.push(cellElem);
            rowElem.appendChild(cellElem);
        }
        // rowElem.style.flexBasis = String(100/numCols) + "%"
        containerElem.appendChild(rowElem);
        grid.push(rowElemArray);
    }
}

function createCell(row, col) {
    const cellElem = document.createElement('div');
    cellElem.classList.add("cell")
    cellElem.classList.add(`cell-${row}-${col}`);
    cellElem.addEventListener('mouseover', (e) => {
        cellElem.style.backgroundColor = "white";
    });
    // cellElem.style.flexBasis = 100/numCols;
    return cellElem;
}

buildGrid();