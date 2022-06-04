function sistemaNotas (notas) {
    let notaArredonda = arrendondamento(notas)
    if (notaArredonda >= 40){
        console.log(`Aprovado com nota ${notaArredonda}`)
    } else{
        
        console.log(`Reprovado com nota ${notaArredonda}`)
    }
}




function arrendondamento(notas){
    if (notas % 5 > 2){
        return notas + (5- (notas % 5))
    }else {
        return notas
    }
}
sistemaNotas(100)
sistemaNotas(30)
sistemaNotas(38)
sistemaNotas(88)
sistemaNotas(61)