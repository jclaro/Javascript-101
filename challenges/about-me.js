// https://jsfiddle.net/07Lw2Lg6/

// Adicionar um script no fundo da página
// Alterar a font-family do body para "Arial, sans-serif"
// Substituir cada uma das spans (nickname, favorites, hometown) com a tua informação
// Iterar cada <li> e mudar a class para "listitem"
// Adicionar um estilo CSS "listitem" para uma cor à vossa escolha.
// Criar um elemento <img> e definir o seu atributo src para uma imagem tua.
// Juntar esse elemento à página


document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').innerHTML = 'Shark';
document.getElementById('favorites').innerHTML = 'Web Development';
document.getElementById('hometown').innerHTML = 'Coimbra, Portugal';
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
}

var myPic = document.createElement('img');
myPic.src = 'http://www.troll.me/images/mah-nigga/your-going-for-advanced-javascript-concepts-mah-nigga.jpg';
myPic.width = '300';
myPic.height = '300';
document.body.appendChild(myPic);

// Events

var toggle = true;
myPic.onclick = function() {
    if(toggle === true) {
        myPic.src = 'http://www.barbarianmeetscoding.com/images/i-know-javascript.jpg';
        toggle = false;
    } else {
        myPic.src = 'http://www.quickmeme.com/img/e4/e474b75342e5a27b7cdcf3ce8f897908bd4f40b06208803f6e795018d823adcd.jpg';
        toggle = true;
   