function MaiorEMenor(vetorinteiro){
    let maior 
    let menor 
    for(let i = 0; i <vetorinteiro.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetorinteiro[i]
            menor = vetorinteiro[i]
        } else if (vetorinteiro[i] > maior){
            maior = vetorinteiro[i]
        } else if(vetorinteiro[i] < menor){
            menor = vetorinteiro[i]
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(MaiorEMenor(vetor))