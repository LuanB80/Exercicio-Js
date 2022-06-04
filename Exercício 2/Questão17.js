
function somarNumeros(arrayNum){
    let resultado = 0
    arrayNum.forEach(number => resultado += number);
    return resultado
}

console.log(somarNumeros([10, 10, 10])) //retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60
