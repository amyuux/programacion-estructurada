import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingresa tu primera nota: ", function(nota1){
    rl.question("ingresa tu segunda nota: ", function(nota2){
        rl.question("ingresa tu tercera nota: ", function(nota3){
            nota1 = Number(nota1);
            nota2 = Number(nota2);
            nota3 = Number(nota3);
            let promedio = (nota1 + nota2 + nota3) / 3;
            console.log(`El promedio de las notas ${nota1}, ${nota2} y ${nota3} es: ${promedio}`);
            rl.close();
        })})});
