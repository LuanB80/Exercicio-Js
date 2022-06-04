function calculadora(numero1, operacao, numero2){
    switch(operacao){
        case '+':
            return numero1 + numero2
            break
        case '-':
            return numero1 - numero2
            break
        case '*':
            return numero1 * numero2
            break
        case '/':
            return numero1 / numero2
            break
        default:
            return 'operações inválidas'    
    }
}

console.log(calculadora(3, '+', 5))
console.log(calculadora(3, '-', 5))
console.log(calculadora(3, '*', 5))
console.log(calculadora(5, '/', 5))