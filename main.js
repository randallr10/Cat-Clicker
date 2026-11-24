//Changeable values//
let paws = 0;
let notationStyle = "compact";

if (paws > 999999999999999) {
    notationStyle = "scientific";
}



//Unchangeable values//
const clickImage = document.getElementById('clickableCat');
const formatter = new Intl.NumberFormat("en-US", {
    notation: notationStyle,
    maximumFractionDigits: 2
});


//EventListeners//
clickImage.addEventListener('click', incrementPaws);


//Functions//
function incrementPaws() {
    paws+=1;
    document.getElementById('playerOwned').innerHTML = formatter.format(paws);
}