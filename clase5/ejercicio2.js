import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingresa la base de el rectangulo: ", function(base){
    rl.question("ingresa la altura de el rectangulo: ", function(altura){
        base = Number(base);
        altura = Number(altura);
        let area = base * altura;
        console.log(`El área del rectángulo con base ${base} y altura ${altura} es: ${area}`);
        rl.close();
    });
});