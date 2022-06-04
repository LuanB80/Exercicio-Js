function escola(codigo, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let MediaPonderada = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do aluno: ${codigo}. Notas ${nota1}, ${nota2}, ${nota3}. Media: ${MediaPonderada} / ${MediaPonderada < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

escola(180, 6, 4, 5)