const persona = {
  apellidos: "Zapata Torres",
  nombres: "Alessandro del Piero",
  hablar: function() { return "Hola que tal" },
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Grocio Prado",
    direccion: "Calle San Maritn 123",
    mostrar: function() {
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion} - ${this.apellidos}`
    }
  }
}

console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())