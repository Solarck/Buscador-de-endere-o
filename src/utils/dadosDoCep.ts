import type DAdosApi from "./DadosApi"
export default function montaCep(conexaoConvertida: any): DAdosApi {
    return {
        cep: conexaoConvertida.cep,
        logradouro: conexaoConvertida.logradouro,
        bairro: conexaoConvertida.bairro,
        localidade: conexaoConvertida.localidade,
        uf: conexaoConvertida.uf,
    };
}

