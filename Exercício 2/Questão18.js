function despesasTotais(produtos){
    const soma = produtos.map(p => p.preco).reduce((acumulador, atual)=>{
        return acumulador + atual 
    })

    return soma
}





console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ])) // retornará 239.99
console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])) // retornará 34599.89