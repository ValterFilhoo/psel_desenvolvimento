const mobileMenu = document.getElementById('menuCelular');
const navList = document.querySelector('.categoriasCelular');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('menuAtivo');
});


const primeiroValor = document.getElementById('primeiroValor');
const segundoValor = document.getElementById('segundoValor');
const inputResultado = document.getElementById('inputResultado');
const operacao = document.getElementById('operacao');

const resultadoVerificacao = document.getElementById('resultadoVerificacao');

function verificaSoma() {

    const valor1 = parseInt(primeiroValor.textContent);
    const valor2 = parseInt(segundoValor.textContent);
    let valorDoUsuario = inputResultado.value.trim();

    if (valorDoUsuario === "") {
        resultadoVerificacao.innerText = "Erro. Insira o valor da soma na Verificação de Segurança.";
        resultadoVerificacao.style.display = 'flex';
        return
    }

    valorDoUsuario = parseInt(inputResultado.value);

    
    if (!isNaN(valor1) && !isNaN(valor2)) {

        const resultado = valor1 + valor2;


        if (resultado === valorDoUsuario) {

            resultadoVerificacao.innerText = `O resultado da soma da verificação de segurança é: ${resultado}.`;

            resultadoVerificacao.innerText += " Você acertou!";

        } else {

            resultadoVerificacao.innerText = "A soma está incorreta. Tente novamente.";

        }

        resultadoVerificacao.style.display = 'Flex';

    } else {
        console.log("Erro nos valores:", valor1, valor2);
    }

}

