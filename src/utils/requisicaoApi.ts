export function buscaCep(cepValue: string) {
    return fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
}
