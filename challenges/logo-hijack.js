// http://google.com/

// Encontrar o logo do Google e guardá-lo numa variável
// Modificar a source da IMG (?) de modo que seja o logo do NEI
// Encontrar o botão de pesquisa e guardá-lo numa variável
// Modificar o texto do botão de modo a que diga “Yahooo!”


var logo = document.getElementById('hplogo');

logo.style.background = "url(https://nei.dei.uc.pt/static/img/logonei.png) no-repeat";

logo.style.backgroundSize = "95px 95px";
logo.style.height = "95px";
logo.style.width = "95px";

button = document.getElementsByName('btnK')[0];
button.value = "Yahooo!";