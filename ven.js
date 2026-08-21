const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el código (VEN-2026-045): ", (codigo) => {
  const departamento = codigo.slice(0, 3);
  
  console.log("Identificador del departamento:", departamento);

  rl.close();
});