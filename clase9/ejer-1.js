
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout

});

readline.question("Ingrese su nombre completo:", (nombreCom)  => {
    console.log ("En mayusculas:", nombreCom.toUpperCase());
    console.log("En minusculas:", nombreCom.toLowerCase());
    readline.close();

});
