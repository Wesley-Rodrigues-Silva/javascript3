const resp = document.querySelector('#container h1');
const data = new Date();
resp.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'full'});
