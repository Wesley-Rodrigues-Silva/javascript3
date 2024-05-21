const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade é ${this.idade}`)
    },

    incrementIdade(){
        this.idade++;
    }
    
}

pessoa1.fala();
pessoa1.incrementIdade();
pessoa1.fala();

/*
function criaPessoa(nome, sobrenome, idade){
    return{
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Maria', 'Silva', 16);
const pessoa3 = criaPessoa('Paulo', 'Colla', 32);
const pessoa4 = criaPessoa('Isabela', 'Ferraz', 35);
const pessoa5 = criaPessoa('Wesley', 'Rodrigues', 44);

console.log(pessoa1.nome, pessoa1.sobrenome);
*/