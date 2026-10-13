const peliculas = [
  ["Hereditary", "El conjuro", "It", "Un lugar en silencio", "Siniestro"],
  ["Toy Story", "Frozen", "El Rey León", "Shrek", "Mi Villano Favorito"],
  ["Supercool", "¿Qué pasó ayer?", "Y dónde está el piloto", "Son como niños", "La máscara"]
]

//Mostrar las 15 peliculas en la consola
peliculas.forEach(generoPeliculas => {
  generoPeliculas.forEach(pelicula => {
    console.log(pelicula)
  })
})