// Declarativa
function suman(a, b) {
    return a + b;
}

console.log(suman(5,15));
// Flecha
const restar = (a, b) => a - b;

console.log(restar(5,15));

const saludar = (nombre = "Amigo") => `Hola, ${nombre}`;

// Llamar a la función y mostrar el resultado en la consola
console.log(saludar()); // Salida: Hola, Amigo
console.log(saludar("Carlos")); // Salida: Hola, Carlos


//convertir grados celsius a farenheit
console.log("Conversor de temperatura")
const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Ejemplo de uso
console.log(celsiusAFahrenheit(0));    // Salida: 32
console.log(celsiusAFahrenheit(25));   // Salida: 77
console.log(celsiusAFahrenheit(-10));  // Salida: 14
console.log("--------------------------------------")