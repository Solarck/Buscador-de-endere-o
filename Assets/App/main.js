async function buscaCep() {
    const cep = document.getElementById('input-cep').value

    try {
        const conexaoApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const conexaoConvertida = await conexaoApi.json()

        if (conexaoConvertida.erro) {
            const exibeErro = document.getElementById('exibe-erro')
            throw Error (exibeErro.innerHTML = 'O cep não existe')
        }

        const CEP = conexaoConvertida.cep
        const logradouro = conexaoConvertida.logradouro
        const bairro = conexaoConvertida.bairro
        const localidade = conexaoConvertida.localidade
        const UF = conexaoConvertida.uf

        const busca = document.getElementById('botao-busca')
        const campo = document.querySelector('.campo-de-endereco')
        const novaBusca = document.getElementById('nova-busca')
        const inputCep = document.getElementById('input-cep')

        exibeResultado(busca, campo, CEP, logradouro, bairro, localidade, UF)

        novaBusca.addEventListener('click', () => {
            campo.innerHTML = `
                <h1 class="titulo" id="cep">CEP: </h1>
                <h1 class="titulo" id="Logradouro">Logradouro:</h1>
                <h1 class="titulo" id="Bairro">Bairro:</h1>
                <h1 class="titulo" id="Localidade">Localidade:</h1>
                <h1 class="titulo" id="UF">UF:</h1>`
            inputCep.value = ' '
        })
    }
    catch (erro){}
}

function exibeResultado(busca, campo, CEP, logradouro, bairro, localidade, UF) {
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
}
