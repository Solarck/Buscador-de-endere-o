function consultaCep() {
    const cep = document.getElementById('input-cep').value

    let url = `https://viacep.com.br/ws/${cep}/json/`
    
    fetch(url).then(function (response) {
        response.json().then(function(data){

            const CEP = data.cep
            const logradouro = data.logradouro
            const bairro = data.bairro
            const localidade = data.localidade
            const UF = data.uf
    
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
            return
        })
    })
}