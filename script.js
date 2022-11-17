const displayOculto = document.querySelector('.display_oculto');
const display = document.querySelector('.calculadora__display');
const botao = document.querySelectorAll('.botao');

botao.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const valor = e.target.innerText;
        if (valor === '.') {
            if (display.innerHTML.indexOf(".") === -1) {
                insert(valor);
            } else {
                limpar();
                alert('Use um operador válido!');
            }
        }
        if (+valor >= 0) {
            insert(valor);
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            let ultimoDigito = display.innerHTML.slice(-1);
            if (ultimoDigito === '' || ultimoDigito === '+' || ultimoDigito === '-' || ultimoDigito === '*' || ultimoDigito === '/') {
                limpar();
                alert('Use um operador válido!');

            } else {
                insert(valor);
                displayOculto.innerHTML = display.innerHTML;
                limpar();
            }
        }
        if (valor === 'C') {
            limpar();
        }
        if (valor === '=') {
            displayOculto.innerHTML = displayOculto.innerHTML + display.innerHTML;
            calcular(valor);
            display.innerHTML = displayOculto.innerHTML;
        }

    })
})

function insert(num) {
    var numero = display.innerHTML;
    display.innerHTML = numero + num;
}

function calcular() {
    var resultado = displayOculto.innerHTML;
    if (resultado) {
        displayOculto.innerHTML = eval(resultado);
    }
    else {
        display.innerHTML = "VAZIO";
    }
}
function limpar() {
    display.innerHTML = "";
}
