let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(VetoPilha, VetoAdiciona){
    for(let i = 0; i < VetoAdiciona.length; i++){
        console.log(VetoAdiciona[i])
        VetoPilha.push(VetoAdiciona[i])
    }
    console.log(`Vetor adicionado: ${VetoAdiciona}`)
    console.log(`Vetor resultado: ${VetoPilha}`)
}

adicionaVetor(vetorPilha, vetorAdiciona )