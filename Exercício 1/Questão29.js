function vetorinteiro(vetor){
    let numerosForaDoIntervalo = 0
    let numerosDentroDoIntervalo = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numerosDentroDoIntervalo++
        } else{
            numerosForaDoIntervalo++
        }
    }

    console.log(`Numeros dentro do intervalo: ${numerosDentroDoIntervalo} / Numeros fora do intevalo: ${numerosForaDoIntervalo}`)
}


vetor = [ 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21]
vetorinteiro(vetor)