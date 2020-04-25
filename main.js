const overlay = document.getElementById('overlay');
const shape = document.querySelector('.shape-circle-red');
const radios = document.querySelectorAll('.button-container input');

radios.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    overlay.style.background = event.target.value;
    shape.style.background = event.target.value;
  });
});
