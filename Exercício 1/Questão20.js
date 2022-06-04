function QuantiNotas(valor){
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let Notavalor = calcValNota(valor)
    while(valor >= Notavalor){
        switch(Notavalor){
            case 100:
                valor -= 100
                contador100++
                break
            case 50:
                valor -= 50
                contador50++
                break
            case 10:
                valor -= 10
                contador10++
                break
            case 5:
                valor -= 5
                contador5++
                break
            case 1:
                valor -= 1
                contador1++
                break
        }

        Notavalor = calcValNota(valor)
    }
    return elaborarResul(contador100, contador50, contador10, contador5, contador1)
}


function calcValNota (valor) {
    if(valor >= 100){
        return 100
    }else if(valor >= 50){
        return 50
    }else if(valor >= 10){
        return 10
    }else if(valor >= 5){
        return 5
    }else if(valor >= 1){
        return 1
    }
}

function elaborarResul (contador100,contador50, contador10, contador5, contador1){
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(QuantiNotas(155));