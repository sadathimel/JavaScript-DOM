const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'violet', 'indigo'];

const container = document.querySelector('section');
const h1 = document.querySelector('h1');
const selectedColor = document.querySelector('#selectedColor');

for(let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');

  container.appendChild(box);
  box.style.backgroundColor = color;

  box.addEventListener('click', function() {
    h1.innerText = 'You have a selected: ';
    selectedColor.innerText = box.style.backgroundColor;
    selectedColor.style.backgroundColor = box.style.backgroundColor;
  });

}
