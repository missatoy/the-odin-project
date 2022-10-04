const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.classList.add('red-text');
redText.textContent = "Hey I'm red!";
redText.style.color = 'red';

const blueh3 = document.createElement('h3');
blueh3.classList.add('blue-h3');
blueh3.textContent = "I'm a blue h3!";
blueh3.style.color = 'blue';

container.appendChild(redText);
container.appendChild(blueh3);

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-div');
pinkDiv.style.cssText = 'border: solid 1px black; background-color: pink; padding: 20px;';

container.appendChild(pinkDiv);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = 'Me too!'

pinkDiv.appendChild(h1);
pinkDiv.appendChild(p);

const btn = document.querySelector('#btn');

function alertFunction() {
  alert("Yay, I did it!");
}
