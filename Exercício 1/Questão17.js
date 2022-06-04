function funcionario(salario, plano){
    switch(plano){
        case 'A' :
            return salario + (salario * 0.1)
            break;
        case 'B' :
            return salario + (salario * 0.15)
            break;
        case 'C' :
            return salario + (salario * 0.2)
            break;
        default:
            return 'Plano inválido' 
    }
}

console.log(funcionario(1000, 'A'))
console.log(funcionario(1000, 'B'))
console.log(funcionario(1000, 'C'))
console.log(funcionario(2000, 'A'))
console.log(funcionario(2000, 'B'))
console.log(funcionario(2000, 'C'))