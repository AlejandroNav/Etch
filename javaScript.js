const gridContainer = document.querySelector("#grid-container");

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    setGridSize(8);
    fillGrid(8);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e) {
    console.log("reguistro mause");
    console.log(Math.floor(Math.random() * 255))
    e.target.style.backgroundColor = "red"
    
}