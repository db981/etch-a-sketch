function generateGrid(dimensions = 20){
    const grid = document.querySelector(".grid");
    const squareLength = grid.offsetHeight/dimensions;
    console.log(squareLength);
    
    for(let x = 0; x < dimensions**2; x++){
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cell.style.height = `${squareLength}px`;
        cell.style.width = `${squareLength}px`;
        cell.style.border = '1px solid black';
        grid.appendChild(cell);
    }
}
generateGrid();