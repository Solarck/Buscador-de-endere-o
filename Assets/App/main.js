const teste = document.getElementById('botao-busca')

const campo = document.querySelector('.campo-de-endereco')

teste.addEventListener('click', () => {
    campo.innerHTML = `<h1 id="cep">CEP: <p class="dados"> 06395-280</p> </h1>
    <h1 id="Logradouro">Logradouro: <p class="dados"> Rua Nova Prata</p> </h1>
    <h1 id="Bairro">Bairro: <p class="dados"> Cidade Ariston Estela Azevedo</p> </h1>
    <h1 id="Localidade">Localidade: <p class="dados"> Carapicuíba</p> </h1>
    <h1 id="UF">UF: <p class="dados"> SP</p> </h1>
    <div class="botao">
        <button class="botao-busca" id="nova-busca">Nova Busca</button>
    </div>`
})