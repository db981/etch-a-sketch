const grid = document.querySelector(".grid");
grid.height = "80vh";
grid.width = "80vh";
let cells = [];
generateGrid(16);

let colorSelector = document.querySelector(".colorSelector");
let color = colorSelector.value;
colorSelector.addEventListener("change", (event) => color = event.target.value);

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener('click', resetGrid);

let newGridBtn = document.querySelector(".newGridBtn");
newGridBtn.addEventListener('click', (event) => {
    deleteGrid();
    generateGrid(getUserDimensions());
});

window.addEventListener('resize', resizeGrid);

function getUserDimensions(){
    let userDimensions;
    while(!userDimensions){
        let userDimensions = prompt("Enter grid dimensions (max 100)");
        if(userDimensions >= 1 && userDimensions <= 100){
            return userDimensions;
        }
    }
}

function generateGrid(dimensions){
    let gridInfo = grid.getBoundingClientRect();
    const squareLength = gridInfo.height/dimensions;

    for(let x = 0; x < dimensions**2; x++){
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cell.style.height = `${squareLength}px`;
        cell.style.width = `${squareLength}px`;
        cell.style.outline = '1px solid black';
        grid.appendChild(cell);
        cells.push(cell);
    }
    cells.forEach(cell => cell.addEventListener('mouseover', cellHovered)); 
}

function resetGrid(){
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

function deleteGrid(){
    cells.forEach(cell => cell.remove());
    cells = [];
}

function resizeGrid(){
    let gridInfo = grid.getBoundingClientRect();
    const dimensions = Math.sqrt(cells.length);
    const squareLength = gridInfo.height/dimensions;
    cells.forEach(cell => {
        cell.style.width = `${squareLength}px`; 
        cell.style.height = `${squareLength}px`
    });
}

function cellHovered(event){
    event.target.style.backgroundColor = color;
    console.log(color);
}
