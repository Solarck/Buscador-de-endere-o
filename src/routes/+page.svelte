<script lang="ts">
    import type DAdosApi from "../utils/DadosApi";

    let input: any;
    function mascaraDeCep() {
        let inputLength = input.value.length;
        if (inputLength == 5) {
            input.value += "-";
        }
    }

    let cepValue: any;
    let exibeErro: any;
    let dadosApi: DAdosApi | null = null;
    
    async function buscaCep() {
        try{
        const conexaoApi = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        const conexaoConvertida = await conexaoApi.json();
        
        if (conexaoConvertida.erro) {
            throw Error (exibeErro.innerHTML = 'O cep não existe')
        }

        dadosApi = {
            cep: conexaoConvertida.cep,
            logradouro: conexaoConvertida.logradouro,
            bairro: conexaoConvertida.bairro,
            localidade: conexaoConvertida.localidade,
            uf: conexaoConvertida.uf,
        }}
        catch (erro){}
    }
</script>

<div class="main">
    <section class="container">
        <h1 class="legenda">
            Buscamos qualquer endereço, do Brasil, para você.
        </h1>

        <div class="input">
            <input
                class="input-num"
                maxlength="9"
                autocomplete="off"
                required
                bind:this={input}
                on:keypress={mascaraDeCep}
                bind:value={cepValue}
            />
        </div>

        <span>
            <p class="aviso" bind:this={exibeErro} />
        </span>

        <div class="botao">
            <button class="botao-busca" on:click={buscaCep}>Buscar</button>
        </div>
    </section>

    {#if dadosApi}
        <section class="container-section">
            <div class="campo-de-endereco">
                <h1 class="titulo">CEP:  {dadosApi.cep}</h1>
                <h1 class="titulo">Logradouro:  {dadosApi.logradouro}</h1>
                <h1 class="titulo">Bairro:  {dadosApi.bairro}</h1>
                <h1 class="titulo">Localidade:  {dadosApi.localidade}</h1>
                <h1 class="titulo">UF:  {dadosApi.uf}</h1>
            </div>
        </section>
    {/if}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Golos+Text:wght@500&display=swap");
    :global(body) {
        font-family: "Golos Text", sans-serif;
        background: rgba(11, 11, 11, 0.466);
        inset: 0;
    }

    .main {
        display: flex;
        justify-content: center;
    }

    .container {
        margin-top: 100px;
        width: 450px;
        height: 450px;
        background: #ffffffe7;
        display: block;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 5);
        border-radius: 15px;
    }

    .legenda {
        margin-top: 50px;
        text-align: center;
    }

    .input {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .input-num {
        width: 250px;
        height: 50px;
        border-radius: 10px;
        padding-left: 15px;
        font-size: 18px;
        font-family: "Golos Text", sans-serif;
        font-weight: 300;
        margin-bottom: 25px;
    }

    .aviso {
        display: flex;
        justify-content: center;
        margin-top: 5px;
        color: red;
    }

    .botao {
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }

    .botao-busca {
        border: none;
        background: rgb(240, 11, 99);
        font-size: 18px;
        color: #ffff;
        width: 170px;
        height: 50px;
        border-radius: 10px;
        font-family: "Golos Text", sans-serif;
        font-weight: 300;
    }

    .botao-busca:hover {
        cursor: pointer;
        background: rgb(240, 90, 147);
    }

    .container-section {
        padding: 20px;
        margin-left: 20px;
        margin-top: 100px;
        width: 450px;
        height: 410px;
        background: #ffffffe7;
        display: block;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 5);
        border-radius: 15px;
    }

    .titulo {
        justify-content: start;
    }

    @media screen and (max-width: 750px) {
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .container {
            width: 85%;
            margin-top: 50px;
            margin-bottom: 18px;
        }

        .container-section {
            width: 77%;
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 50px;
        }

        .legenda {
            padding: 10px;
        }
    }
</style>
