//Funcion 3:
//Crear una funcion que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos siempre que tengan el mismo numero
//de elementos, de lo contrario, devolver array vacio []

function sumarArreglos(arreglo1, arreglo2) {
    if (arreglo1.length != arreglo2.length) {
        return [];
    }

    let resultado = [];

    for (let i = 0; i < arreglo1.length; i++) {
        resultado.push(arreglo1[i] + arreglo2[i]);
    }

    return resultado;
}

console.log(sumarArreglos([1, 2, 3], [4, 5, 6]));
console.log(sumarArreglos([1, 2], [3, 4, 5]));

//test...


//Funcion 4:
//Crear una funcion que solicite un numero positivo y retore todos los divisores
//de 5 desde 1 hasta el numnero que hayan indicado. El resultado se obtiene
//como arreglo. Ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40]

function obtenerDivisores(numero) {
    let resultado = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            resultado.push(i);
        }
    }

    return resultado;
}

console.log(obtenerDivisores(22));
console.log(obtenerDivisores(40));