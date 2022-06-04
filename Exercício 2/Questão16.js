function checarAnoBissexto(ano){
    let divisivelPorQuatro = ano % 4 == 0
    let divisivelPorCem = ano % 100 == 0
    let divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos


}

console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
