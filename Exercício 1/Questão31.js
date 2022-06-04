function VetorNegativo(vetornumber){
    let contadorNegativo = 0
    for(let i = 0; i < vetornumber.length; i++){
        if(vetornumber[i] < 0){
            contadorNegativo++
        }
    }
    console.log(`Quantidade de negativo ${contadorNegativo}`)
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
VetorNegativo(vetor)
