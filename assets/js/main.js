// CAPTURAR EVENTO DE SUBMIT DO FORMULÁRIO
const form = document.querySelector('#formulario');

//FUNÇÃO QUE CAPTURA OS DADOS E RETORNA O RESULTADO
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

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

    console.log('Imc:',imc,nivelImc);
});


// FUNÇÃO QUE CLASSIFICA O PESO DO USUÁRIO
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade Grau I', 'Obesidade Grau II','Obesidade Grau III'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

//FUNÇÃO QUE CALCULA O IMC
function getImc (peso, altura) {
   
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    
}

//FUNÇÃO QUE CRIA UM PARAGRÁFO HTML
function paragrafo (className) {
    
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = paragrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
