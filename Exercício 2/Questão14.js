function objetoParaArray(obj){
    return Object.entries(obj)


}


console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    })) // irá retornar [["codigo", 11111], ["preco", 12000]]