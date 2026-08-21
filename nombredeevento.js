const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Ingrese el nombre del evento: ", (nombreEvento) => {
  const eventoMayusculas = nombreEvento.toUpperCase();
  console.log("Nombre del evento en mayúsculas:", eventoMayusculas);

  rl.close();
});
