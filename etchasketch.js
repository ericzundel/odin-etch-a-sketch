console.log("Starting");

let grid = [];
let pixelsPerSide = 16;
const bodyElem = document.querySelector('body');
const containerElem = document.querySelector('.container');
const pixelsInputElem = document.querySelector('.pixels');
const resetButtonElem = document.querySelector('.reset');

pixelsInputElem.value = pixelsPerSide;

resetButtonElem.addEventListener('click', (e) => {
    pixelsPerSide = Math.min(pixelsInputElem.value, 100);
    buildGrid();
    pixelsInputElem.value = pixelsPerSide;
});

function buildGrid() {
    const offset = containerElem.getBoundingClientRect().y;
    const width = window.innerHeight - offset - 10;
    const rowHeight = width / pixelsPerSide;
    containerElem.style.width = String(rowHeight * pixelsPerSide) + "px"

    while (containerElem.firstChild) {
        containerElem.firstChild.remove()
    }

    // build the grid of divs
    for (let row = 0; row < pixelsPerSide; row++) {
        let rowElem = document.createElement("div");
        rowElem.className = 'row';
        let rowElemArray = [];
        for (let col = 0; col < pixelsPerSide; col++) {
            let cellElem = createCell(row, col);
            rowElemArray.push(cellElem);
            rowElem.appendChild(cellElem);
        }
        rowElem.style.height = String(rowHeight) + "px";
        rowElem.style.flexBasis = String(rowHeight) + "px";
        containerElem.appendChild(rowElem);
        grid.push(rowElemArray);
    }
}

function createCell(row, col) {
    const cellElem = document.createElement('div');
    cellElem.classList.add("cell")
    cellElem.classList.add(`cell-${row}-${col}`);
    cellElem.addEventListener('mouseover', (e) => {
        cellElem.style.backgroundColor = "lightgrey";
    });
    return cellElem;
}

buildGrid();