
function paintSquare(e){
    switch(paintOption){
        case 0:
            this.style.backgroundColor = 'black';
            break;
        case 1: 
            break;
        case 2:
            break;   
    }
}

function createGrid(gridSize){
    const pad = document.querySelector('#sketchpad');
    for(let i = 0; i<gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j<gridSize; j++){
            const square = document.createElement('div');
            let squareSize = 300/gridSize;
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover',paintSquare);
            row.appendChild(square);
        }
    pad.appendChild(row);
    }
}

let paintOption = 0;
const blackButton = document.querySelector('#black');
const randomButton = document.querySelector('#random');
const slowButton = document.querySelector('#slow');
const clearButton = document.querySelector('#clear');
blackButton.onclick = ()=>{paintOption=0; console.log(paintOption);};
randomButton.onclick = ()=>{paintOption=1;  console.log(paintOption);};
slowButton.onclick = ()=>{paintOption=2;  console.log(paintOption);};
clearButton.addEventListener('click',(e)=>{
    const pad = document.querySelector('#sketchpad');
    const rows= document.querySelectorAll('.row');
    rows.forEach((row)=>{
        pad.removeChild(row);
    });
    let gridSize=prompt("Enter new grid size");
    createGrid(gridSize);
})

createGrid(50);



