function estaEntre(numero, minimo, maximo, inclusivo = false){
   if(inclusivo === true) {
       return numero >= minimo && numero <= maximo
   } else{
       return numero > minimo && numero < maximo
   }
}


console.log(estaEntre(10, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true
