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
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(gridElement);
    }
}
let browns = ['#D29B74', '#C88556', '#B9703C', '#9A5D32', '#7B4B28', '6C4123', '4D2F19']

function changeColor(e) {
    let rand6 = Math.floor(Math.random() * 6)
    e.target.style.backgroundColor = browns[rand6]
}
function changeColors(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


const button = document.querySelector("#reset-button");
button.addEventListener("click", askGrid)
function askGrid(params) {
    console.log("Hola clciok");
    let newSize = prompt("Enter new size");
    console.log("lo queires de " + newSize);
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a between  1 and 64");
            askGrid();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}
function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}


function cleanGrid() {
    const elements = document.querySelectorAll(".grid-element")
    for (const iterator of elements) {
        console.log(iterator);
        iterator.style.baccolor = "magenta";
    }
}

const buttonClear = document.querySelector("#clean-button")
buttonClear.addEventListener('click', cleanGrid)