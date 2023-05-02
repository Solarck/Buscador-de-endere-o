<!-- <script lang="ts">
    let input: any;
    let statusDeErro: boolean | null = null;
    import type DAdosApi from "../utils/DadosApi";

    function mascaraDeCep() {
        let inputLength = input.value.length;
        if (inputLength == 5) {
            input.value += "-";
        }
    }

    if (conexaoConvertida.erro) {
            dadosApi = null;
            statusDeErro = true;
        } else {
            statusDeErro = false;
            dadosApi;
        }
</script>

<div class="input">
    <input
        class="input-num"
        maxlength="9"
        autocomplete="off"
        required
        bind:this={input}
        on:keypress={mascaraDeCep}
        bind:value={cepValue}
        class:erro-input={statusDeErro === true}
    />
</div>

<style>
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
    }

    .erro-input{
        border: 1px solid #ff003e;
    }
</style> -->