import readline from 'node:readline';
const rl = readline.createInterface({  
    input: process.stdin,
    output: process.stdout
}); 
rl.question("ingrese el nombre del empleado: ", function(nombre) {
rl.question("ingrese las horas trabajadas: ", function(horas) {
    rl.question("ingrese el valor por hora: ", function(valor) {
        let sueldo = parseInt(valor);
        let horasTrabajadas = parseInt(horas);
        sueldo = sueldo * horasTrabajadas;
        console.log("\n-- Salario Semanal --");
        console.log(`El empleado ${nombre}`);
        console.log(`El sueldo semanal es: ${sueldo.toFixed(2)}`);   
        rl.close();
})})}); 
