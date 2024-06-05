const resp = document.querySelector('#container');
const data = new Date();
resp.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

