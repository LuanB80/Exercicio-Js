function filtraNumeros(arrayElementos){
    return arrayElementos.filter(numeros => typeof numeros === "number")
}

console.log(filtraNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtraNumeros(["a", "c"]))