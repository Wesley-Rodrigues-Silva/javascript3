const h1 = document.querySelector('.container h1');

const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto = '';
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
    }
    return diaSemanaTexto;
}

function getNomeMes(numeroMes) {
    let nomeMes = '';
    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            break;
        case 1:
            nomeMes = 'Fevereiro';
            break;
        case 2:
            nomeMes = 'Março';
            break;
        case 3:
            nomeMes = 'Abril';
            break;
        case 4:
            nomeMes = 'Maio';
            break;
        case 5:
            nomeMes = 'Junho';
            break;
        case 6:
            nomeMes = 'Julho';
            break;
        case 7:
            nomeMes = 'Agosto';
            break;
        case 8:
            nomeMes = 'Setembro';
            break;
        case 9:
            nomeMes = 'Outubro';
            break;
        case 10:
            nomeMes = 'Novembro';
            break;
        case 11:
            nomeMes = 'Dezembro';
            break;
    }
    return nomeMes;
}

function createDate(data) {
    const diaSemana = getDiaSemanaTexto(data.getDay());
    const numeroMes = getNomeMes(data.getMonth());
    const dia = data.getDate();
    const ano = data.getFullYear();

    return `${diaSemana}, ${dia} de ${numeroMes} de ${ano}`;

    console.log(dia)
}

h1.innerHTML = createDate(data);


console.log(dia)