const calculadora = document.querySelector(".calculadora");
const botoes = calculadora.querySelector(".calculadora__botoes");

botoes.addEventListener("click", e => {
    if (e.target.matches("button")) {
        // Fazer algo
        const botao = e.target;
        const action = botao.dataset.action;
        if (!action) {
            console.log('number key!')
        }
        if (
            action === 'soma' ||
            action === 'diminui' ||
            action === 'multiplica' ||
            action === 'divide'
        ) {
            console.log('operator key!')
        }
        if (action === 'ponto') {
            console.log('decimal key!')
        }

        if (action === 'limpa') {
            console.log('clear key!')
        }

        if (action === 'calcula') {
            console.log('equal key!')
        }
    }
})

