const pessoa = {
    nome: 'Wesley',
    sobrenome: 'Rodrigues',
    idade: 26,
    endereco: {
        rua: 'Av Brasil',
        numero: 203
    }
};

const {nome, ...resto} = pessoa;

console.log(resto);