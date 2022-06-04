function funcaoDaSorte(numero){
    let numeroAleatorio = Math.floor(Math.random() * 10 + 1)
    if(numero === numeroAleatorio){
        return `Parabéns! O número sorteado foi o ${numeroAleatorio}`
    } else {
        return `Que pena! O número sorteado foi o ${numeroAleatorio}`
    }

}



console.log(funcaoDaSorte(10)) 
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))