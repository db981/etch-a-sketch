const grid = document.querySelector(".grid");
let cells = [];
generateGrid(16);

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener('click', resetGrid);

let newGridBtn = document.querySelector(".newGridBtn");
newGridBtn.addEventListener('click', (event) => {
    deleteGrid();
    generateGrid(getUserDimensions());
});

//window.addEventListener('resize', resizeGrid);

function getUserDimensions(){
    let userDimensions;
    while(!userDimensions){
        let userDimensions = prompt("Enter grid dimensions (max 100)");
        if(userDimensions >= 1 && userDimensions <= 1000){
            return userDimensions;
        }
    }
}

function generateGrid(dimensions){
    const squareLength = grid.offsetHeight/dimensions;
    
    for(let x = 0; x < dimensions**2; x++){
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cell.style.height = `${squareLength}px`;
        cell.style.width = `${squareLength}px`;
        cell.style.outline = '1px solid black';
        grid.appendChild(cell);
        cells.push(cell);
    }
    grid.style.minWidth = `${squareLength * dimensions}px`;
    grid.style.minHeight = `${squareLength * dimensions}px`;
    cells.forEach(cell => cell.addEventListener('mouseover', cellHovered));
}

function resetGrid(){
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

function deleteGrid(){
    cells.forEach(cell => cell.remove());
}

function cellHovered(event){
    event.target.style.backgroundColor = "black";
}
