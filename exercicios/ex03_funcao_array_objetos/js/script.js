function meuEscopo(){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado')
    const pessoas = [];


    form.addEventListener('submit', function(e){
        e.preventDefault();
        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;

        resultado.appendChild(pessoas)
        pessoas.innerHTML += resultado;
    })

    
}
meuEscopo();