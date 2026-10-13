const alimentos = [
  ["manzana","pera","mango","sandia","melon"], //5
  ["lechuga","coliflor","esparrago"], //3
  ["pescado","cerdo"], //2
  ["arroz","cereal", "avena", "maiz", "trigo","centeno", "cebada"] //7
]

//¿Cuantos elementos tiene la matriz?
console.log("Total elementos matriz:", alimentos.length)

//¿Cual es el array de la matriz que tiene mas datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
})
console.log("Array mas grande contiene:",mayor)

//¿Cual es el array de la matriz que tiene menos datos?
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length < menor){
    menor = categoriaAlimentos.length
  }
})
console.log("Array mas pequeño contiene:",menor)

//¿Cuantos elemntos en total tiene la matriz? considerando los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
})
console.log("En total tenemos:", sumatoria, "alimentos")