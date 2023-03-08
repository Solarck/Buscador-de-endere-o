// async function cep() {
//     try {

//         const conexaoApi = await fetch('https://viacep.com.br/ws/01001125/json/')
//         const conexaoConvertida = await conexaoApi.json()

//         if(conexaoConvertida.erro){
//             throw Error ('Cep não existente')
//         }
//         console.log(conexaoConvertida)
//     }
//     catch (erro){console.log(erro)}
// }
// cep()