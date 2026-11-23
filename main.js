//Unchangeable values//
const clickImage = document.getElementById('clickableCat');


//Changeable values//
let paws = 0;


//EventListeners//
clickImage.addEventListener('click', incrementPaws);


//Functions//
function incrementPaws() {
    paws+=1;
    document.getElementById('playerOwned').innerHTML = paws;
}