const display = document.querySelector('.calculadora__display');
const botao = document.querySelectorAll('.botao');

botao.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const valor = e.target.innerText;

        if (+valor >= 0) {
            insert(valor);
        }
        if (valor === "." || valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            let ultimoDigito = display.innerHTML.slice(-1);
            if (ultimoDigito === '' || ultimoDigito === '.' || ultimoDigito === '+' || ultimoDigito === '-' || ultimoDigito === '*' || ultimoDigito === '/') {
                limpar();
                alert('Use um operador válido!')
            } else {
                insert(valor)
            }
        }
        if (valor === 'C') {
            limpar();
        }
        if (valor === '=') {
            calcular(valor);
        }

    })
})

function insert(num) {
    var numero = display.innerHTML;
    display.innerHTML = numero + num;
}

function calcular() {
    var resultado = display.innerHTML;
    if (resultado) {
        display.innerHTML = eval(resultado);
    }
    else {
        display.innerHTML = "VAZIO"
    }
}
function limpar() {
    display.innerHTML = "";
}