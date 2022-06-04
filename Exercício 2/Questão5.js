function MaiorOuIgual(num1,num2){
    if(typeof num1 != typeof num2){
        return false
    }
    return num1 >= num2
}


console.log(MaiorOuIgual(0, 0))
console.log(MaiorOuIgual(0, "0"))
console.log(MaiorOuIgual(5, 1))