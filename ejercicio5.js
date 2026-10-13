let frutas = ["Manzana", "plátano", "naranja", "fresa", "uva", "limón", "piña", "mango", "sandía", "melón"]

//Mostrar la lista invertida (último al primero)
for (let i = (frutas.length - 1); i >= 0; i--){
  //console.log(frutas[i])
}

//Verificar si existe un elemento = "fresa"
let frutaBuscada = "lima"
const resultado = frutas.find(fruta => fruta == frutaBuscada)
const encontrado = frutas.includes(frutaBuscada)
console.log(resultado, encontrado)