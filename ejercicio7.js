const paises = [
  ["Peru", "Brasil", "Argentina", "Paraguay", "Chile"],
  ["Italia","Francia","Alemania","Portugal","Escocia"],
  ["Japon","China","Corea del Sur","Taiwan","Indonesia"],
  ["Egipto","Senegal","Costa de Marfil","Nigeria","Kenia"]
]

//Mostrar los paises de Asia (unicamente) utilizando foreach
paises[2].forEach(pais => {
  console.log(pais)
})

//Agregar 2 paises en la lista de America

paises[0].push("Ecuador")
paises[0].push("Colombia")

console.log("--------------------------------")

//Mostrar los paises de America
paises[0].forEach(pais => {
  console.log(pais)
})