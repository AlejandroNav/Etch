const gridContainer = document.querySelector("#grid-container");
window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    setGridSize(9);
    fillGrid(9);
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
    console.log( "brown colors");
    let rand6 = Math.floor(Math.random() * 6)
    e.target.style.backgroundColor = browns[rand6]
}

function changeColors(e) {
    console.log( "rainbow colors");
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const button = document.querySelector("#reset-button");
button.addEventListener("click", askGrid)

function askGrid() {
    let newSize = prompt("Enter new size below 35 and above 1");
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 2 || newSize > 35 || Number.isNaN(newSize)) {
            alert("Enter a between  1 and 35");
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
        iterator.style.backgroundColor = "#e6cab6";
    }
}

const buttonClear = document.querySelector("#clean-button")
buttonClear.addEventListener('click', cleanGrid)

//-------------------------- HERE BE BUGS ==================

const buttonColors = document.querySelector("#colors-button")
buttonColors.addEventListener('click', moveColors)

function moveColors() {
    const elements = document.querySelectorAll(".grid-element")
    for (const iterator of elements) {
        iterator.addEventListener('mouseover', changeColors)
        iterator.removeEventListener('mouseover', changeColor)
    }
}

const buttonBrowns = document.querySelector("#brown-button")
buttonBrowns.addEventListener('click', moveBrown)

function moveBrown() {
    console.log('Hello from browns');
    const elements = document.querySelectorAll(".grid-element")
    for (const iterator of elements) {
        console.log('debuggins from from browns');
        iterator.addEventListener('mouseover', changeColor)
        iterator.removeEventListener('mouseover', changeColors)
    }
}