function SaberOsDias(dias) {
    switch (dias) {
        case 1: case 7: 
            return 'Fim de semana'
            break
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'
            break    
        default :
            return 'Dia inválido'      
    }
}

console.log(SaberOsDias(5))
console.log(SaberOsDias(1))
console.log(SaberOsDias(7))
console.log(SaberOsDias(8))
console.log(SaberOsDias(3))



