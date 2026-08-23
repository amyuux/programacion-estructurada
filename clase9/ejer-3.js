const codigoNumerico = 20260081;

// ccadena de texto
const codigoTexto = codigoNumerico.toString();

// el slice para los primeros 4 dígitos

const primerosCuatro = codigoTexto.slice(0, 4);

console.log("Código original (número):", codigoNumerico);
console.log("Primeros cuatro dígitos (texto):", primerosCuatro);