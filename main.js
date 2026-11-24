//Changeable values//
let cats = 0;
let passiveCats = 0;
let clickValue = 1;

let cursorCost = 15;
let cursorOwned = 0;

let notationStyle = "compact";



if (cats > 999999999999999) {
    notationStyle = "scientific";
}



//Unchangeable values//
const clickImage = document.getElementById('clickableCat');
const buyCursorBuilding = document.getElementById('building');

const formatter = new Intl.NumberFormat("en-US", {
    notation: notationStyle,
    maximumFractionDigits: 2
});


//EventListeners//
clickImage.addEventListener('click', incrementCats);
buyCursorBuilding.addEventListener('click', buyCursor);


//Functions//
function incrementCats() {
    cats+=clickValue;
    document.getElementById('bank').innerHTML = formatter.format(cats);
}

function buyCursor() {
    if (cats >= cursorCost) {
        cats-=cursorCost;
        cursorCost*=1.11;
        passiveCats+=0.1;
        cursorOwned+=1;
        document.getElementById('bank').innerHTML = formatter.format(cats);
        document.getElementById('playerPerSecond').innerHTML = formatter.format(passiveCats);
        document.getElementById('price').innerHTML = formatter.format(cursorCost);
        document.getElementById('owned').innerHTML = formatter.format(cursorOwned);
    }
}