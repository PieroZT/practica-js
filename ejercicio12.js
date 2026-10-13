//¿Que es una funcion?
//Conjunto de instrucciones que se pueden reutilizar
//Acepta parametros de salida y puede devolver algun valor (opcional)

//Pruebas, test
function saludar(){
  console.log("Hola")
}

//Correcto
function despedirse(){
  return "adios"
}

function verificarNota(calificacion = 0){
  //aprobado - desaprobado | operador ternario (condicion simple)
  return (calificacion >= 10.5 ? "aprobado" : "desaprobado")
}

//La funcion retorna el neto, incrementando +150 si tiene hijos
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

//>= 65 "jubilacion activa", contrario, "fase laboral"
function verificarJubilacion(edad){
  //condicion ? valor_cumple : valor_no_cumple
  return edad >= 65 ? "jubilación activa" : "fase laboral"
}

//esta funcion recibe una lista de sueldos (no sabemos la cantidad de elementos)
//tambien se debe indicar si obtendremos el mayor
//la funcion retorna el mayor o menor sueldo dependiendo de su configuracion
function analizarSueldo(listaSueldos = [], obtenerMayor = true){
  
  let resultado = 0

  if (obtenerMayor){
    listaSueldos.forEach(sueldo => {
      if (sueldo > resultado) resultado = sueldo
    })
  }else{
    resultado = listaSueldos[0]
    listaSueldos.forEach(sueldo => {
      if (sueldo < resultado) resultado = sueldo
    })
  }

  return resultado
}

//recibe un objeto, retorna un arreglo
function obtenerTelefonos(objeto = {}){
  return objeto.telefonos
}

//Retornar un objeto con los parametros
function crearObjeto(apellidos = '', nombres = '', edad = 0){
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad
  }
}

saludar()
console.log(despedirse())
console.log(verificarNota(6))
console.log(calcularNeto(3500, 2)) //3500 + 300
console.log(verificarJubilacion(45))
console.log(analizarSueldo([3500, 1800, 4100, 2200], false))

const perfil = {
  nombres: "Luis Mateo",
  dni: "41454400",
  telefonos: ["956000111", "956000222"]
}
console.log(obtenerTelefonos(perfil))
console.log(crearObjeto('Zapata Torres','Alessandro del Piero','19'))