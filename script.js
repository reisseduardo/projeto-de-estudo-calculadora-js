const display = document.querySelector('.calculadora__display');
const botao = document.querySelectorAll('.botao');

botao.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const valor = e.target.innerText;
            console.log(valor);
    })
})
