const text = document.querySelector('.greeting');
const button = document.querySelector('button');

const strTxt = text.textContent;
//console.log(strTxt);
splitText = strTxt.split('');
//console.log(splitText);
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span> ' + splitText[i] + ' </span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

button.addEventListener('click', () => {
  window.location.reload();
});
