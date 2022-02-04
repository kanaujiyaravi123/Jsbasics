let inpt = 3;//prompt("Enter Grid Size");
let n = parseInt(inpt);
let center = document.createElement('center');
let gameInit=false;
let d=0;

const numberOfMushrooms = (n * n) / 3;
var mushroomPositions = [];
while (mushroomPositions.length < numberOfMushrooms) {
    const randomNum = Math.floor(Math.random() * ((n * n) - 1) + 1)
    if (!mushroomPositions.includes(randomNum)) {
        mushroomPositions.push(randomNum);
    }

}
let matrix = [];
let gridCnt = 0;
init();
function init() {
    for (let i = 0; i < n; i++) {
        matrix[i] = matrix[i] || []
        for (let j = 0; j < n; j++) {

            if (i == 0 && j == 0)
                matrix[i][j] = "mario";
            else if (mushroomPositions.includes(gridCnt))
                matrix[i][j] = "mushroom";
            else matrix[i][j] = 0;
            gridCnt++;
        }

    }
    drawGrid()
}


let marioPos={
    x:0,
    y:0
}
let mushroomEaten=mushroomPositions.length;
console.log(mushroomEaten)
let countEatenMushrooms=0;
let CurrDirection="left";
document.onkeydown= function (e){
    if(gameInit==false) startGame();
    console.log(e.key);
    if(e.key=="ArrowLeft"){
        CurrDirection="left";
    }
    else if(e.key=="ArrowRight"){
        CurrDirection="right";
    }
    else if(e.key=="ArrowUp"){
        CurrDirection="up";
    }
    else if(e.key=="ArrowDown"){
        CurrDirection="down";
    }
};
function startGame(){
    gameInit=true;
    if(d) clearInterval(d);
    d=setInterval(()=>{
        if(mushroomEaten===0){
            alert("mushrooms eaten in " + countEatenMushrooms+ " steps");
            clearInterval(d);
            console.log(mushroomEaten)
        }
        if(CurrDirection==="left"){
            if(marioPos.y>0){
                if(matrix[marioPos.x][marioPos.y-1]==="mushroom"){
                    mushroomEaten--;
                    console.log(mushroomEaten)
                }
                matrix[marioPos.x][marioPos.y]=0;
                marioPos.y=marioPos.y-1;
                matrix[marioPos.x][marioPos.y]="mario";
                countEatenMushrooms++;
                drawGrid();
            }else{
                CurrDirection="right";
            }
        }
            else if(CurrDirection==="right"){
                if(marioPos.y<matrix[0].length-1){
                    if(matrix[marioPos.x][marioPos.y+1]==="mushroom"){
                        mushroomEaten--;
                        console.log(mushroomEaten)
                    }
                    matrix[marioPos.x][marioPos.y]=0;
                    marioPos.y=marioPos.y+1;
                    matrix[marioPos.x][marioPos.y]="mario";
                    countEatenMushrooms++;
                    drawGrid();
                }else{
                    CurrDirection="left";
                }
        }
        else if(CurrDirection==="up"){
            if(marioPos.x>0){
                if(matrix[marioPos.x-1][marioPos.y]==="mushroom"){
                    mushroomEaten--;
                    console.log(mushroomEaten)
                }
                matrix[marioPos.x][marioPos.y]=0;
                marioPos.x=marioPos.x-1;
                matrix[marioPos.x][marioPos.y]="mario";
                countEatenMushrooms++;
                drawGrid();
            }else{
                CurrDirection="down";
            }

        }else if(CurrDirection==="down"){
            if(marioPos.x<matrix.length-1){
                if(matrix[marioPos.x+1][marioPos.y]==="mushroom"){
                    mushroomEaten--;
                    console.log(mushroomEaten)
                }
                matrix[marioPos.x][marioPos.y]=0;
                marioPos.x=marioPos.x+1;
                matrix[marioPos.x][marioPos.y]="mario";
                countEatenMushrooms++;
                drawGrid();
            }else{
                CurrDirection="up";
            }
        }
    
    }, 750);
}

     
function drawGrid() {
    var marioTable = document.getElementById('table');
    marioTable.innerHTML = "";

    for (let i = 0; i < n; i++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            var td = document.createElement('td');
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            }
            else {

                td.setAttribute('class', 'cell blackcell');
                tr.appendChild(td);
            }
            if (matrix[i][j] == "mario") {
                const image = document.createElement('img');
                image.src = "marioo.png";
                image.classList.add('reduce2');
                td.appendChild(image)
            }
            if (matrix[i][j] == "mushroom") {
                const image = document.createElement('img');
                image.src = "mushroom.png";
                image.classList.add('reduce2');
                td.appendChild(image);
            }

        }
        marioTable.appendChild(tr);

    }
    center.appendChild(marioTable);
    marioTable.setAttribute('cellspacing', '0');
    document.body.appendChild(center);

}