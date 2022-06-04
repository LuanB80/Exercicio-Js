function menorNumero(arraynumeros){
    let resultado = arraynumeros[0]
    for(let i in arraynumeros){
        if(arraynumeros[i] < resultado){
            resultado = arraynumeros[i]
        }
    }
    return resultado
}


console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15
