//Changeable values//
let cats = 0;
let passiveCats = 0;
let clickValue = 1;

let notationStyle = "compact";



if (cats > 999999999999999) {
    notationStyle = "scientific";
}



//Unchangeable values//
const clickImage = document.getElementById('clickableCat');


const formatter = new Intl.NumberFormat("en-US", {
    notation: notationStyle,
    maximumFractionDigits: 2
});


//EventListeners//
clickImage.addEventListener('click', incrementCats);
buyCursor.addEventListener('click', buyCursor);


//Functions//
function incrementCats() {
    cats+=clickValue;
    document.getElementById('bank').innerHTML = formatter.format(cats);
}