import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question("ingrese un numero: ", function(numero) {
    let numeroP = parseFloat(numero);
    let esNumero = isNaN(numeroP);
    console.log(`El numero ingresado es: ${numero}`);
    console.log(`El numero ingresado convertido a float es: ${numeroP}`);
    console.log(`El valor retornado usando isNaN() es: ${esNumero}`);
    rl.close();
});