const form = document.querySelector('form');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');
const contItens = document.querySelector('.container-itens')

form.addEventListener('submit', function(e){
    e.preventDefault();
    calcularImc();
    
})

function calcularImc(){
    const peso = parseFloat(pesoInput.value);
    const altura = alturaInput.value.replace(/[.,]/g, '');

    const imc = peso / ((altura / 100 ) * (altura / 100));


    if (imc < 18.5) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso)`;
        resultado.style.backgroundColor = '#dbce12';
        contItens.style.color = '#0004ff';
    } else if (imc < 25) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Peso normal)`;
        resultado.style.backgroundColor = '#12db34';
        contItens.style.color = '#0004ff';
    } else if (imc < 30) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Sobrepeso)`;
        resultado.style.backgroundColor = '#dbce12';
        contItens.style.color = '#0004ff';
    } else if (imc < 35) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau I)`
        resultado.style.backgroundColor = '#db6212';
        contItens.style.color = '#0004ff';
    } else if (imc < 40) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau II)`
        resultado.style.backgroundColor = '#db6212';
        contItens.style.color = '#0004ff';
    } else {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau III)`
        resultado.style.backgroundColor = '#ff0000';
        contItens.style.color = '#0004ff';
    }
        
}