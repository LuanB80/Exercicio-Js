let vetor = [1, 2, 3, 4, 5, 7, 10, 12]

function PrimeiraFun(vetorNumerico, numero){
    let novoVetor = []
    for(let i =0; i < vetorNumerico.length; i++){
        novoVetor.push(vetorNumerico[i] * numero)
    }
    return novoVetor
}
function SegundaFun(vetorNumerico, numero){
    let novoVetor = []
    for(let i =0; i < vetorNumerico.length; i++){        
        if(vetorNumerico[i]> 5){
            novoVetor.push(vetorNumerico[i] * numero)
        }
    }
    return novoVetor
}




console.log(PrimeiraFun(vetor, 5))
console.log(SegundaFun(vetor, 5))