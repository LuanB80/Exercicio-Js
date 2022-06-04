function calcularMedia(arrayNum){
    let resultado = 0
    arrayNum.forEach(number => resultado += number);
    return resultado / arrayNum.length
}

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3