
function randomRGB(){
    return 'rgb('+ Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')'
}

function incrementShade(color){
    color = color.slice(4,-1);
    let values = color.split(',');

    if(Number(values[0]) == Number(values[1]) && Number(values[0]) == Number(values[2])){
        if(values[0]-20>0){
            values[0]-=20;
            return 'rgb('+values[0]+','+values[0]+','+values[0]+')';
        }else{
            values[0]=0;
            return 'rgb('+values[0]+','+values[0]+','+values[0]+')';
        }
    }else{
        console.log('noo');
        return color;
    }
}

function paintSquare(e){
    switch(paintOption){
        case 0:
            this.style.backgroundColor = 'rgb(0,0,0)';
            break;
        case 1: 
            this.style.backgroundColor = randomRGB();
            break;
        case 2:
            this.style.backgroundColor = incrementShade(this.style.backgroundColor);
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
            square.style.backgroundColor = 'rgb(255,255,255)';
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
blackButton.onclick = ()=>{paintOption=0; };
randomButton.onclick = ()=>{paintOption=1; };
slowButton.onclick = ()=>{paintOption=2;  };
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



