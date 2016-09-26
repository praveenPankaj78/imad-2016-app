console.log('Loaded!');

//Change HTML Content
var element = document.getElementById('main-text');
console.log(element);
element.innerHTML = 'New Value';

//Make Image move
var img = document.getElementById('madi');

img.onClick = function() {
    img.style.marginLeft='100px';
};