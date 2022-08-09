// CAPTURAR EVENTO DE SUBMIT DO FORMULÁRIO
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('Evento Prevenido');
    // setResultado('O resultado aparecerá aqui!');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    // Validar se os valores são Numbers
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

});

function paragrafo (className) {
    
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    // p.innerHTML = 'Qualquer coisa';
    // resultado.appendChild(p);
    const p = paragrafo();
    p.innerHTML = msg;
    resultado.appendChild(p);
}


// Dados
const peso = 65;
const altura = 1.70;

// Processamento

const imc = peso/(altura*altura);

console.log(imc);