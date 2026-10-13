//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Zapata Torres",
  nombres: "Alessandro",
  edad: 19,
  telefonos: ["956111222", "956333000", "956777000"],
  formacion: [
    { nivel: "Primaria", nombre: "San Martin de Porres", anio: 2014},
    { nivel: "Secundaria", nombre: "Juan C. de Mora", anio: 2020},
    { nivel: "Superior", nombre: "SENATI", anio: 2025}
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
    { skill: "Lenguajes programacion", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
  ]
}

//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

console.log("-------------------------------")

//¿Cual es el nombre del centro de formacion secundaria?
console.log(perfil.formacion[1].nombre)

console.log("-------------------------------")

//¿Cuantos telefonos tiene la persona?
console.log(perfil.telefonos.length)

console.log("-------------------------------")

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
})