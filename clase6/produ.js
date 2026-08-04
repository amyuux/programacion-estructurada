import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(nombre) {
    rl.question("Ingrese el precio del producto: ", function(precio) {
        rl.question("Ingrese el porcentaje de descuento (ej. 10): ", function(descuento) {
            let precioProducto = parseFloat(precio);
            let descuentoProducto = parseFloat(descuento);
            let montoDescuento = precioProducto * (descuentoProducto / 100);
            let precioConDescuento = precioProducto - montoDescuento;
            console.log("\n-- Resumen de Compra --");
            console.log(`Producto: ${nombre}`);
            console.log(`Precio original: $${precioProducto.toFixed(2)}`);
            console.log(`Descuento aplicado: ${descuentoProducto}% (-$${montoDescuento.toFixed(2)})`);
            console.log(`Precio final a pagar: $${precioConDescuento.toFixed(2)}`);

            rl.close();
        });
    });
});