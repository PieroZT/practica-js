//Formas de crear una funcion
//F1: Por declaracion
function hacerAlgo(){
  return "resultado"
}

//F2: Por expresion
const saludo = function saludar(){
  return "Hola que tal"
}

console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}

console.log(suma(17,20))

//Tipos de funciones: ANÓNIMA (funciones por expresion)
const mensaje = function(){
  return "Ingenieria de Software"
}

console.log(mensaje) //Tipo de dato => function
console.log(mensaje()); //Ejecuta la funcion

//Para aplicar este tipo de funciones se requiere ; antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar ;
/*
(declaracion de la funcion)(ejecucion de la funcion)
*/

(function(){
  console.log("Hola que tal")
})();

(
  function (nombre = ''){
    console.log('Bienvenida:', nombre)
  }
)('Katherine');

//Crea una funcuion autoejecutable que calcule el promedio de 3 notas
//Estas funciones sueles EJECUTAR TAREAS sin retornar datos
(
  function (nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) /3 )
  }
)(14, 12, 20);