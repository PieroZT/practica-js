//Construir un objeto con los datos una pelicula
const pelicula = {
  titulo: "Avengers: Infinity War",
  anio: 2018,
  idiomas: ["Ingles", "Español", "Español Latinoamericano"],
  duracionMin: 149,
  generos: ["Accion", "Aventura", "Superheroes"],
  presupuesto: 400_000_000,
  recaudacion: 2_052_000_000,
  elenco: [
    { nombre: "Robert Downey Jr.", personaje: "Iron Man", rol: "Protagonistas"},
    { nombre: "Chris Hemsworth", personaje: "Thor", rol: "Protagonistas"},
    { nombre: "Mark Ruffalo", personaje: "Hulk", rol: "Protagonistas"},
    { nombre: "Chris Evans", personaje: "Captain America", rol: "Protagonistas"},
    { nombre: "Scarlett Johansson", personaje: "Natasha Romanoff", rol: "Protagonistas"},
    { nombre: "Benedict Cumberbatch", personaje: "Dr. Strange", rol: "Protagonistas"},
    { nombre: "Don Cheadle", personaje: "War Machine", rol: "Protagonistas"},
    { nombre: "Tom Holland", personaje: "Spider Man", rol: "Protagonistas"},
    { nombre: "Chadwick Boseman", personaje: "Black Panther", rol: "Protagonistas"},
    { nombre: "Paul Bettany", personaje: "Vision", rol: "Protagonistas"},
    { nombre: "Elizabeth Olsen", personaje: "Wanda Maximoff", rol: "Protagonistas"},
    { nombre: "Anthony Mackie", personaje: "Sam Wilson", rol: "Protagonistas"},
    { nombre: "Sebastian Stan", personaje: "Winter Soldier", rol: "Protagonistas"},
    { nombre: "Chris Pratt", personaje: "Star Lord", rol: "Protagonistas"}
  ],
  sinopsis: "Thanos reúne las seis Gemas del Infinito y, tras derrotar a los Vengadores, elimina a la mitad de la vida en el universo con un chasquido de dedos.",
  direccion: ["Hermanos Russo"],
  escritores: ["Christopher Markus", "Stephen McFeely"]
}

console.log(pelicula.titulo);