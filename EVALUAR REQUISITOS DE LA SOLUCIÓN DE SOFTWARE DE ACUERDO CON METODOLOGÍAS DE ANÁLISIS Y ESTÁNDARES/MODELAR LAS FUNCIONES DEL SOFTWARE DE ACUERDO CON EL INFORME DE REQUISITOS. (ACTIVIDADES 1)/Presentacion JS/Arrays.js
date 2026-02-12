console.log("funciones predefinidas para los Arrays");

console.log("length");
let numeros = [1, 2, 3];
console.log(numeros.length); // 3

console.log("push");
let num = [1, 2, 3];
num.push(4);
console.log(num); // [1, 2, 3, 4]

console.log("pop");
let numeritos = [1, 2, 3];
numeritos.pop();
console.log(numeritos); // [1, 2, 3]

console.log("shift");
let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); // [2, 3]

console.log("unshift");
let ejemplo = [1, 2, 3];
ejemplo.unshift(0);
console.log(ejemplo); // [0, 2, 3]

console.log("forEach");
let ejemplos = [1, 2, 3];
ejemplos.forEach(n => console.log(n * 2)); // Resultado: 0, 4, 6

console.log("map");
let otroejemplo = [1, 2, 3];
let dobles = otroejemplo.map(n => n * 2);
console.log(dobles); // [0, 4, 6]

console.log("filter");
let otro_ejemplo = [1, 2, 3];
let pares = otro_ejemplo.filter(n => n % 2 === 0);
console.log(pares); // [0, 2]

console.log("find");
let ejem = [1, 2, 3];
let mayorAUno = ejem.find(n => n > 1);
console.log(mayorAUno); // 2

console.log("reduce");
let ejemplitos = [1, 2, 3];
let suma = ejemplitos.reduce((acumulador, n) => acumulador + n, 0);
console.log(suma); // 5

console.log("--------------------------------------")

