function PlanoDeSaude(idade){
    let valor = 100
    if(idade < 10) {
        return valor + 80 
    } else if(idade >= 10 && idade < 30) {
        return valor + 50 
    } else if(idade >= 30 && idade < 60) {
        return valor + 95 
    } else if(idade >= 60) {
        return valor + 130 
    }
}


console.log(PlanoDeSaude(9))
console.log(PlanoDeSaude(10))
console.log(PlanoDeSaude(15))
console.log(PlanoDeSaude(29))
console.log(PlanoDeSaude(50))
console.log(PlanoDeSaude(70))