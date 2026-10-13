let edades = [43, 22, 57, 19, 31, 48, 60, 25, 38, 51, 18, 42, 27, 34, 53];

//mayor
let mayor = 0, menor = edades[0], promedio = 0

edades.forEach(edad => {
  if (edad > mayor) mayor = edad
  if (edad < menor) menor = edad
  promedio += edad
})

promedio = (promedio / edades.length).toFixed(2)

console.log("Total de edades:", edades.length)
console.log("La mayor edad:", mayor)
console.log("La menor edad:", menor)
console.log("El promedio:", promedio)