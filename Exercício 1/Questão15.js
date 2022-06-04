function concessionaria(automovel){
    switch(automovel){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedans' :
            return 'Tem certeza que não prefere este modelo?'
            break    
        case 'motocicletas' :
            return 'Tem certeza que não prefere este modelo?'
            break    
        case 'caminhonetes' :
            return 'Tem certeza que não prefere este modelo?'
            break    
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'    
    }
}


console.log(concessionaria('hatch'))
console.log(concessionaria('sedans'))
console.log(concessionaria('motocicletas'))
console.log(concessionaria('caminhonetes'))
console.log(concessionaria('cobalt'))