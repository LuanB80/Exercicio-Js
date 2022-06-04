function anuidade(mes, valorAnuidade){
    if(mes > 0  && mes < 13){
        let MesAtrasado = mes - 1
        return (valorAnuidade * ((1 + (5/100))** MesAtrasado)).toFixed(2)
    } else {
        return 'Mês invalido'
    }
} 


console.log(anuidade(2, 100))