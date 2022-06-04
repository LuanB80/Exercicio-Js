function triangulo(x, y, z){
    if(x == y && y == z ){
        console.log("Triangulo equilatero: Todos os lados são iguais")
    } else if (x == y || x == z || y ==z ){
        console.log("Triangulo isosceles: dois lados são iguais")
    } else {
        console.log("Triangulo Escaleno: Todos os lados são diferentes")
    }
}



triangulo(2, 2, 2)
triangulo(2, 3, 2)
triangulo(2, 1, 4)
triangulo(2, 2, 3)
triangulo(1, 2, 2)
