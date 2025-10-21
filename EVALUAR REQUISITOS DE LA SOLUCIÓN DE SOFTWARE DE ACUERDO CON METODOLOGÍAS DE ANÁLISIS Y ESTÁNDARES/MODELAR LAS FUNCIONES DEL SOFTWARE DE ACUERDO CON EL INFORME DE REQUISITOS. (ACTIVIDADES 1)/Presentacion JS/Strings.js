console.log("--------------------------------------")
console.log("funciones predefinidas para los string");
console.log("length");
const texto = "Hola mundo";
console.log(texto.length); // 10
console.log("toUpperCase");
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log("toLowerCase");
console.log(texto.toLowerCase()); // "hola mundo"
console.log("includes");
console.log(texto.includes("mundo")); // true
console.log("slice");
console.log(texto.slice(0, 4)); // "Hola" (del índice 0 al 4, sin incluirlo)
console.log("replace");
console.log(texto.replace("mundo", "amigos")); // "Hola amigos"
console.log("trim");
const conEspacios = "   Hola   ";
console.log(conEspacios.trim()); // "Hola"
console.log("--------------------------------------")

