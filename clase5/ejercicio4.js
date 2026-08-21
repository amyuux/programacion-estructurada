import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question("ingrese el nombre del producto: ", function(nombre){
    rl.question("ingrese el precio del producto: ", function(precio){
        rl.question("ingrese la cantidad de productos: ", function(cantidad){
            nombre = String(nombre);
            precio = Number(precio);
            cantidad = Number(cantidad);
            let total = precio * cantidad;
            console.log(`El total a pagar por ${cantidad} unidades de ${nombre} a un precio unitario de ${precio} es: ${total}`);
            rl.close();
        })})});