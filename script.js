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

window.addEventListener('resize', resizeGrid);

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
    const squareLength = Math.floor(grid.offsetHeight/dimensions*10)/10;
    
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
    console.log("test");
    const dimensions = Math.sqrt(cells.length);
    const squareLength = Math.floor(grid.offsetHeight/dimensions*10)/10;
    cells.forEach(cell => {
        cell.style.width = `${squareLength}px`; 
        cell.style.height = `${squareLength}px`
    });
}

function cellHovered(event){
    event.target.style.backgroundColor = "black";
}
