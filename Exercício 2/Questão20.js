function areaDoTriangulo(base, altura){
    let resultado = (base * altura) / 2
    resultado = `${parseFloat(resultado).toFixed(2)}`

    return resultado
}



console.log(areaDoTriangulo(10, 15))// retornarĂ¡ 75.00
console.log(areaDoTriangulo(7, 9)) // retornarĂ¡ 31.50
console.log(areaDoTriangulo(9.25, 13.1)) // retornarĂ¡ 60.59
