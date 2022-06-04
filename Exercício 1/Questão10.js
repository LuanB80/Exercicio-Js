function verificar(numero) {
    let divisivel = numero
    if( divisivel % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(verificar(3))
console.log(verificar(5))
console.log(verificar(4))
console.log(verificar(6))

