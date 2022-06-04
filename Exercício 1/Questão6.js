function jurosSimples(capitalInicial, taxa, tempo){
    const motante = capitalInicial + (capitalInicial * taxa * tempo)
    return motante
}

function jurosComposto(capitalInicial, taxa, tempo) {
    const motante = capitalInicial * (1 + taxa) ** tempo
    return motante
}


console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));