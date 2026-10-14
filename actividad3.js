//Funcion 1:
//crear una funcion que reciba un arreglo de numeros y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares

function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return {
        pares: pares,
        impares: impares
    };
}

console.log(contarParesImpares([1, 2, 3, 4, 5, 6]));

//Test, demostracion, console.log

//Funcion 2:
//escribir una funcion que retorne true|false dependiendo si el valor de entrada
//corresponde a un número capicúa. 121, 444, 3223. Solo permite analizar valores
//de hasta 5 digitos (99999)

function esCapicua(numero) {
    if (numero < 0 || numero > 99999) {
        return false;
    }

    let original = numero;
    let invertido = 0;

    while (numero > 0) {
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
        numero = Math.floor(numero / 10);
    }

    return original == invertido;
}

console.log(esCapicua(121));    // true
console.log(esCapicua(444));    // true
console.log(esCapicua(3223));   // true
console.log(esCapicua(123));    // false
console.log(esCapicua(123456)); // false