const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el número de factura (ejemplo: FAC-45872): ", (factura) => {
  const facturanum = factura.slice(4);
  console.log("Tu número de factura es:", facturanum);
  rl.close();
});