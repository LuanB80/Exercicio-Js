function anosBissextos (ano) {
    if(ano <= 0){
        return false
    }else if(ano % 400 == 0){
        return false
    }else if(ano % 100 == 0){
        return false
    }else if(ano % 4 == 0){
        return true
    } else{
        return false
    }

}




console.log(anosBissextos(0))
console.log(anosBissextos(4))
console.log(anosBissextos(80))
console.log(anosBissextos(150))
console.log(anosBissextos(100))
console.log(anosBissextos(400))
console.log(anosBissextos(2020))
console.log(anosBissextos(2000))