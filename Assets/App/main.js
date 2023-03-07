async function cep() {
    try {
        const buscaCep = await fetch(`https://viacep.com.br/ws/06395280/json/`)
        const buscaCepConvertido = await buscaCep.json()

        if (buscaCepConvertido.erro) {
            throw Error('O CEP não existe')
        }

        const CEP = buscaCepConvertido.cep
        const logradouro = buscaCepConvertido.logradouro
        const bairro = buscaCepConvertido.bairro
        const localidade = buscaCepConvertido.localidade
        const UF = buscaCepConvertido.uf

        const busca = document.getElementById('botao-busca')
        const campo = document.querySelector('.campo-de-endereco')


        busca.addEventListener('click', () => {
            campo.innerHTML = `<h1 id="cep">CEP: <p class="dados">${CEP}</p> </h1>
            <h1 id="Logradouro">Logradouro: <p class="dados">${logradouro}</p> </h1>
            <h1 id="Bairro">Bairro: <p class="dados">${bairro}</p> </h1>
            <h1 id="Localidade">Localidade: <p class="dados">${localidade}</p> </h1>
            <h1 id="UF">UF: <p class="dados">${UF}</p> </h1>

            <div class="botao">
                <button class="botao-busca" id="nova-busca">Nova Busca</button>
            </div>`
        })

        console.log(buscaCepConvertido)
    }

    catch (erro) {
        console.log(erro)
    }
}cep()
// const inputCep = document.getElementById('input-cep')
// const testando = inputCep.value

// console.log(testando)