function BancoDeFrutas(frutas) {
    switch (frutas) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez em kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Está fruta não existe'    
    }
}



console.log(BancoDeFrutas('maçã'))
console.log(BancoDeFrutas('melancia'))
console.log(BancoDeFrutas('kiwi'))
console.log(BancoDeFrutas('abacaxi'))
console.log(BancoDeFrutas('melão'))