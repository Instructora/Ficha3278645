//Condicionales: if, else, switch
const edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

const obtenerDiaDeLaSemana = (dia) => {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día no válido";
    }
};

// Ejemplo de uso
console.log(obtenerDiaDeLaSemana(1)); // Salida: Lunes
console.log(obtenerDiaDeLaSemana(5)); // Salida: Viernes
console.log(obtenerDiaDeLaSemana(8)); // Salida: Número de día no válido

//Loops: for, while, forEach, map
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Salida: 1, 2, 3, 4, 5

//while
let i = 1;
let sumar = 0;

while (i <= 5) {
    sumar += i; // Suma el valor de i
    i++;       // Incrementa i
}

console.log(sumar); // Salida: 15

//foreach
const consecutivos = [1, 2, 3];
consecutivos.forEach(num => console.log(num * 2));

//map
const numer = [1, 2, 3, 4, 5];
const multiplicados = numer.map((numero) => numero * 2);

console.log(multiplicados);
// Salida: [2, 4, 6, 8, 10]

//ejercicio
const nombres = ["Ana", "Juan", "Luis", "Carla"];

nombres.forEach((nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});
//con for
for (let i = 0; i < nombres.length; i++) {
    console.log(`¡Hola, ${nombres[i]}!`);
}
//con map
nombres.map((nombre) => console.log(`¡Hola, ${nombre}!`));
console.log("--------------------------------------")