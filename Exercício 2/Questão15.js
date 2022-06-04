function receberSomenteOsParesDeIndicesPares(array){
    return array.filter((numero, indice) => {
        let numerosPares = numero % 2 === 0
        let indicesPares = indice % 2 === 0

        return numerosPares  && indicesPares
    })

}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]


