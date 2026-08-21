
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingrese el número de referencia de 6 dígitos: ', (entrada) => {
  
  const numReferencia = Number(entrada);

 
  const referenciaTexto = numReferencia.toString();

 
  const primerosTres = referenciaTexto.slice(0, 3);

  console.log('Número de referencia:', referenciaTexto);
  console.log('Primeros tres dígitos:', primerosTres);

  rl.close();
});