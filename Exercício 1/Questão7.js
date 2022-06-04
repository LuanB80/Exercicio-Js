function baskhara(ax2, bx, c){
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } else {
        x1 = (-bx + Math.sqrt(delta))/ (2 * ax2) 
        x2 = (-bx - Math.sqrt(delta))/ (2 * ax2) 
        resultado.push(x1)   
        resultado.push(x2)
        return resultado   
    }
}


console.log(baskhara(1, 3, 2))
console.log(baskhara(1, 2, 3))

