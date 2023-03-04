const input = document.getElementById('cep')

input.addEventListener('keypress', () =>{
    let inputLength = input.value.length

    if(inputLength == 5){
        input.value += '-'
    }
} )
