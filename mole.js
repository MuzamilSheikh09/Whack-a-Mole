let CurrMoleTile;
let CurrPlantTile;
let score = 0;
let gameover = false;


window.onload = function () {
   setgame();
};

function setgame() {
  
    // Create 8 div with 0-8 id value
    for (let i=0; i<9; i++) {

        let title = document.createElement("div");

        title.id = i.toString();
        //append borad div to 8 more div
        title.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(title);
    }

    setInterval(setmole, 1000);
    setInterval(setplant , 2000);
};

function getRandamtile() {
    // math.random => (0-1) * 9 = (0-9) round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole() {
   
    if (gameover) {
        return;
    }
    if (CurrMoleTile) {
        CurrMoleTile.innerHTML = "";
    }
   
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandamtile();
    if ( CurrPlantTile && CurrPlantTile.id == num) {
        return;
    }
    CurrMoleTile = document.getElementById(num);
    CurrMoleTile.appendChild(mole);
}


function setplant() {
    
    if (gameover) {
        return;
    }
    
    if (CurrPlantTile) {
        CurrPlantTile.innerHTML = "";
     }

     let plant = document.createElement("img");
     plant.src = "./piranha-plant.png";

     let num = getRandamtile();
     if (CurrMoleTile && CurrMoleTile.id == num) {
        return
     }
     CurrPlantTile = document.getElementById(num);
     CurrPlantTile.appendChild(plant);

}


function selectTile() {
     if (gameover) {
        return;
     }
     
    if (this == CurrMoleTile) {
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    } else if (this == CurrPlantTile){
        document.getElementById("score").innerHTML = "GAME OVER:" + score.toString();
        gameover = true;
    }
}