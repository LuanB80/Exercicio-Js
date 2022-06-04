function vetor(vetorNumber){
    let qtdPares = 0
    let qtdImpares = 0
    for(let i = 0; i < vetorNumber.length; i++){
        if(vetorNumber[i] % 2 == 0){
            qtdPares++
        }else {
            qtdImpares++
        }
    }
    
    console.log(`Quantidade de Pares: ${qtdPares}.  Quantidade de Impares: ${qtdImpares}`)
}

let inteiros = [1, 2, 3, 5, 6, 10, 21, 26, 28]
vetor(inteiros)
