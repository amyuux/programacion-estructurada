import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingrese la longitud expresada en metros: ", function(metros) {
    let longitudMetros = parseFloat(metros);
    let longitudCentimetros = longitudMetros * 100;
    console.log(`La longitud de ${longitudMetros} metros es igual a ${longitudCentimetros.toFixed(2)} centímetros.`);
    rl.close();
});