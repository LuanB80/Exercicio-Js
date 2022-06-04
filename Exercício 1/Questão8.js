let PontosFeito = "10, 30, 40, 8, 25, 3, 0, 26, 1”"

function compararPontos(PontosFeito) {
    let pontuacoes = PontosFeito.split(", ")
    let QuebraDeRecord = 0
    let piorJogo = 1
    let maiorPontuacao = PontosFeito[0]
    let menorPontuacao = PontosFeito[0]

    for( let i = 1; i < PontosFeito.length; i++){
        if (PontosFeito[i] > maiorPontuacao){
            maiorPontuacao = PontosFeito [i]
            QuebraDeRecord++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i +1;
        }
    }
    return [QuebraDeRecord, piorJogo]
}

console.log(compararPontos(PontosFeito))