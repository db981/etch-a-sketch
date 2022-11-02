let cells = [];
let userDimensions;
while(!userDimensions){
    let userPrompt = prompt("Enter grid dimensions (max 100)");
    if(userPrompt >= 1 && userPrompt <= 100){
        generateGrid(userPrompt);
        break;
    }
}

cells.forEach(cell => cell.addEventListener('mouseover', cellHovered));

function generateGrid(dimensions = 100){
    const grid = document.querySelector(".grid");
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
}

function cellHovered(event){
    event.target.style.backgroundColor = "black";
}
