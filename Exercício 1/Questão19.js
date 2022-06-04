function lanchonete(codigo, quantidade){
    switch(codigo){
        case 100:
            return 'Cachorro quente: ' + quantidade * 3.00
            break
        case 200:
            return 'Hambúrguer Simples: ' + quantidade * 4.00
            break
        case 300:
            return 'Cheeseburguer: ' + quantidade * 5.50
            break
        case 400:
            return 'Bauru: ' + quantidade * 7.50
            break
        case 500:
            return 'Refrigerante: ' + quantidade * 3.50
            break
        case 600:
            return 'Suco: ' + quantidade * 2.80
            break
        default:
            return 'Produto não existente'    
    }
}
console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))
console.log(lanchonete(700, 2))