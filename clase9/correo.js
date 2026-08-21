const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la dirección de correo electrónico: ", (correo) => {
  const correoMinus = correo.toLowerCase();
  console.log("Correo electrónico en minúsculas:", correoMinus);
  rl.close();
});