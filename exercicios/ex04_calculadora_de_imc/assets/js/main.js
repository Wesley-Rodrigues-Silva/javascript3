const form = document.querySelector('form');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', function(e){
    e.preventDefault();
    calcularImc();
    
})

function calcularImc(){
    const peso = parseFloat(pesoInput.value);
    const altura = alturaInput.value.replace(/[.,]/g, '');

    const imc = peso / ((altura / 100 ) * (altura / 100));


    if (imc < 18.5) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso)`
    } else if (imc < 25) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Peso normal)`
    } else if (imc < 30) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Sobrepeso)`
    } else if (imc < 35) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau I)`
    } else if (imc < 40) {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau II)`
    } else {
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade Grau III)`
    }
        

    
}