var diaSemana = [
    'Domgingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
]

var meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

var atual = new Date();

var dia = atual.getDay();
var diaTexto = diaSemana[atual.getDay()];
var mes = meses[atual.getMonth()];
var ano = atual.getFullYear();
var horas = atual.getHours();
var minutos = zeroAEsquerda(atual.getMinutes());

const resp = document.querySelector('h1');
resp.innerHTML = `${diaTexto}, ${dia} de ${mes} de ${ano} ${horas}:${minutos} `

