console.log('Loaded!');

//Change HTML Content
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New Value';

//Make Image move
var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'; 
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};