function contarCaractere(caract, string){
    let quantidade = 0
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === caract){
            quantidade++
        }
    }

    return quantidade
}

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornarĂ¡ 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornarĂ¡ 1
