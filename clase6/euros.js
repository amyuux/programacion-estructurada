import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question('Ingrese la cantidad de dólares a convertir: ', function(dolares) {
    let cantidadDolares = parseFloat(dolares);
    let cantidadEuros = cantidadDolares * 0.85;
    console.log(`\nCantidad en dólares: $${cantidadDolares.toFixed(2)}`);
    console.log(`Cantidad en euros: €${cantidadEuros.toFixed(2)}`);
    rl.close();
});