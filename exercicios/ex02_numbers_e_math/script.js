const num = document.querySelector('#num-titulo');
const resp = document.querySelector('#resposta');
// Transformei em numero (Number), prompt para exibir uma janela de pergunta na página
const numero = Number(prompt('Digite um número'));

// É necessário concatenar para o innetHTML não sobrepor um ao outro

resp.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`
resp.innerHTML += `<p>${numero} inteiro é: ${Number.isInteger(numero)}</p>`
resp.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<p/>`
resp.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}</p>`
resp.innerHTML += `<p>Arredondando para cima: ${Math.floor(numero)}</p>`
resp.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`
;

