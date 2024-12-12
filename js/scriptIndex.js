const mobileMenu = document.getElementById('menuCelular');
const navList = document.querySelector('.categoriasCelular');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('menuAtivo');
});

const primeiroValor = document.getElementById('primeiroValor').value;
const segundoValor = document.getElementById('segundoValor').value;
const inputResultado = document.getElementById('inputResultado').value;
const operacao = document.getElementById('operacao');

function verificaSoma() {

    if (primeiroValor && segundoValor) {
        const resultado = primeiroValor + segundoValor;
    
        operacao.innerText = resultado;
    }

}


