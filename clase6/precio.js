import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingresa el nombre del producto: ", function(nombre) {
    rl.question("Ingresa el precio unitario del producto: ", function(precio) {
        let precioProducto = parseFloat(precio);   
        rl.question("Ingresa la cantidad de productos: ", function(cantidad) {
            let cantidadProducto = parseInt(cantidad);
            let precioTotal = precioProducto * cantidadProducto;
            console.log("\n-- Resumen de Compra --");
            console.log(`Producto: ${nombre}`);
            console.log(`Precio unitario: $${precioProducto.toFixed(2)}`);
            console.log(`Cantidad: ${cantidadProducto}`);
            console.log(`Precio total a pagar: $${precioTotal.toFixed(2)}`);
            rl.close();
        });
    });
})