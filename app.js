const form = document.querySelector('form');
const facts= document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = 'E dey load Mafo!';
    facts.innerHTML = loadText;
    const baseURL = 'http://numbersapi.com/';
    fetch(baseURL + number)
    .then(response => response.text())
    .then(text => facts.innerHTML = text);
})