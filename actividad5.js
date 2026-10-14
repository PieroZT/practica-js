//Crear una funcion autoejecutable, que imprima cuantas horas, minutos y segundos
//faltan para terminar el dia

(function() {
    let fecha = new Date();

    let horas = 23 - fecha.getHours();
    let minutos = 59 - fecha.getMinutes();
    let segundos = 60 - fecha.getSeconds();

    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    console.log("Faltan " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos para terminar el día");
})();

//Crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos
//devuelva un saludo, despues del tiempo indicado


(function() {
    const readline = require("readline");

    const entrada = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    entrada.question("Ingrese la cantidad de segundos: ", function(respuesta) {
        let segundos = Number(respuesta);

        if (segundos >= 0 && Number.isFinite(segundos)) {
            setTimeout(function() {
                console.log("¡Hola! Ha terminado el tiempo indicado.");
                entrada.close();
            }, segundos * 1000);
        } else {
            console.log("Ingrese un número válido.");
            entrada.close();
        }
    });
})();
