function receberArray(array){
   const primeiroElemento =  array.shift()
   const ultimoElemento = array.pop()

   return [primeiroElemento, ultimoElemento]

}

console.log(receberArray([7,14,"olá"]))
console.log(receberArray([-100, "aplicativo", 16]))