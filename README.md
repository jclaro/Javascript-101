# Javascript 101

Nota: Em actualização.

JavaScript é uma linguagem de programação que, quando aplicada a um documento HTML, pode proporcionar interatividade dinâmica nos websites.

Podem fazer praticamente qualquer coisa com JavaScript. Começando com coisas mais simples como alterar elementos no layout, resposta a eventos como clicar num botão, criar um slider de imagens e eventualmente, à medida que se ganha mais experiência, criar jogos 2D, animação e gráficos 3D, aplicações completamente desenvolvidas com base de dados, etc etc

JavaScript é **Loosely Typed**, o que significa que ao contrário do que C ou Java podemos declarar variáveis sem termos que as classificar com um tipo.

## Criação de objectos

```javascript
// Literal (curly braces):
var profile = {
    first_name: 'Daniel',
    last_name: 'Leal',
    age: 21,
    job: 'Freelance Hitman'
};
     
// Using the Object constructor:
var profile = new Object();
profile.first_name = 'Daniel';
profile.last_name = 'Leal';
profile.age = 21;
profile.job = 'Freelance Hitman'
```

[Understanding JavaScript OOP](http://robotlolita.me/2011/10/09/understanding-javascript-oop.html)

## Funções

```javascript
var daniel = { first_name: 'Daniel',
    		   last_name: 'Leal',
    		   age: 21,
    		   job: 'Freelance Hitman'

              // Returns the full name of object.
              , get name() {
                    return this.first_name + ' ' + this.last_name }

              // Sets the name components of the object,
              // from a full name.
              , set name(new_name) {
                    var names = new_name.trim().split(/\s+/)
                    this.first_name = names['0'] || ''
                    this.last_name  = names['1'] || '' }
              }
```

```javascript
// Greets a random person
daniel.greet = function(person) {
    return this.name + ': Why, hello there, ' + person + '.'
}
```

## HTML DOM

O DOM cria uma hierarquia correspondente à estrutura de cada documento Web (ver Imagem). Representa portanto um documento como uma árvore, sendo que cada nó é um objecto.

É através do DOM que o JavaScript interage com o conteúdo de um website. JavaScript e o DOM são normalmente vistos como uma única entidade uma vez que o JavaScript é normalmente usado para este propósito: aceder, percorrer e manipular documentos HTML.

E nós podemos pegar no objecto e mudar as suas propriedades:

```javascript
document.body.stylecolor = 'red';
```

## Obter elementos do DOM

```javascript
document.getElementById("xyz");
document.getElementsByTagName("p");
document.getElementsByClassName("abc");
document.getElementsByName("xyz");
```

### Exemplo prático

http://codepen.io/keremciu/pen/EgGcu

Onde está:

```html
<div id="box1" class="box show">
            <div class="item">
```

mudar para

```html
<div id="box1" class="box show">
            <div class="item" post="first_post">
```

```javascript
// By Id
first_post = document.getElementById("first_post");
first_post.style.border = "solid 2px #ccc";


// By Class Name
hearts = document.getElementsByClassName("heart");
hearts[0].innerHTML = "<3";


for(var i = 0; i < hearts.length; i++) {
  console.log(i);
  hearts[i].innerHTML = "love it!";
}

// By Tag Name

images = document.getElementsByTagName("img");
images[0].style.width = "100px";
images[0].style.height = "100px";

// Alternative approach

first_post_image = first_post.getElementsByTagName("img")[0];
first_post_image.style.width = "70px";
first_post_image.style.height = "70px";
```

http://flukeout.github.io/

```javascript
p = document.querySelector("#fancy pickle");
p.style.width = "50px"
```

# Exercícios

## Logo Hijack

http://google.com/

1. Encontrar o logo do Google e guardá-lo numa variável
2. Modificar a source da IMG (?) de modo que seja o logo do NEI
3. Encontrar o botão de pesquisa e guardá-lo numa variável
4. Modificar o texto do botão de modo a que diga “Yahooo!”

```javascript
var logo = document.getElementById('hplogo');

logo.style.background = "url(https://nei.dei.uc.pt/static/img/logonei.png) no-repeat";

// Background image is now bigger than the div. Let's fix it:
logo.style.backgroundSize = "95px 95px";
logo.style.height = "95px";
logo.style.width = "95px";

button = document.getElementsByName('btnK')[0];
button.value = "Yahooo!";
```

## Bigger Button

http://www.portugalstartupjobs.pt/

1. Alterar o padding do botão I’M A STARTUP para 20px
2. Usando **obrigatoriamente** os seguintes métodos (não necessariamente por esta ordem):

* getElement(s)By?
* previousSibling
* childNodes

Possível solução: Uma vez que temos que usar o childNodes começamos por procurar o nó pai dos 2 botões existentes na página:
```javascript
// Possível solução
var buttons = document.getElementsByClassName('buttons')[0];
```
Quantos/quais são os nós filhos do nó/elemento HTML buttons?

```javascript
var jobseeker = buttons.childNodes[3]; // este ainda não é o nosso botão
```

```javascript
var startups = jobseeker.previousSibling.previousSibling; // agora sim
// var startup = jobseeker.previousElementSibling; // navega para o nó irmão anterior, do mesmo tipo (neste caso: button)
startup.firstChild.style.padding = '20px';
```

## About me


https://jsfiddle.net/07Lw2Lg6/

Recorrendo a JavaScript
1. Alterar a font-family do body para "Arial, sans-serif"

```javascript
document.body.style.fontFamily = 'Arial, sans-serif';
```

2. Substituir cada uma das spans (nickname, favorites, hometown) com a tua informação

```javascript
document.getElementById('nickname').innerHTML = 'Shark';
document.getElementById('favorites').innerHTML = 'Web Development';
document.getElementById('hometown').innerHTML = 'Coimbra, Portugal';
```

3. Iterar cada <li> e mudar a class para "listitem"

```javascript
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
}
```

4. Adicionar um estilo CSS "listitem" para uma cor à vossa escolha.

```css
.listitem {
	color: blue;
}
```

5. Criar um elemento <img> e definir o seu atributo src para uma imagem tua.

```javascript
var myPic = document.createElement('img'); // Cria um novo elemento HTML, fora do DOM
myPic.src = 'http://www.troll.me/images/mah-nigga/your-going-for-advanced-javascript-concepts-mah-nigga.jpg';
myPic.width = '300';
myPic.height = '300';
```

6. Juntar esse elemento à página

```javascript
document.body.appendChild(myPic); // Adiciona ao body (que está no DOM), o novo elemento criado
}
```








