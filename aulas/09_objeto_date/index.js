/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString()); */

/* const data = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mês, dia, hora, minuto, segundo e milessimos de segundos
console.log(data.toString())*/

/*const data = new Date('2019-04-20 15:33:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1 ); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milessimo de segundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 É domingo, 6 é sábado
console.log(data.toString());
console.log(Date.now());*/

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${minuto}:${segundo}`

}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

