function estaEntre(numero, minimo, maximo, inclusivo = false){
   if(inclusivo === true) {
       return numero >= minimo && numero <= maximo
   } else{
       return numero > minimo && numero < maximo
   }
}


console.log(estaEntre(10, 100, 50)) // retornarĂ¡ true
console.log(estaEntre(16, 100, 160)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3, true)) // retornarĂ¡ true
