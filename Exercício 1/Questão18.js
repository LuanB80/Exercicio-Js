function escreverNumero(numero){
    switch(numero){
        case 0:
            return 'zero'
            break
        case 1:
            return 'um'
            break
        case 2:
            return 'dois'
            break
        case 3:
            return 'três'
            break
        case 4:
            return 'Quatro'
            break
        case 5:
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break
        case 10:
            return 'Dez'
            break
        default:
            return 'Número fora do intervalo'
    }
}

console.log(escreverNumero(2))
console.log(escreverNumero(3))
console.log(escreverNumero(4))
console.log(escreverNumero(11))