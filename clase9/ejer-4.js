const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Nombre del estudiante: ', (nombre) => {
  readline.question('Apellido del estudiante: ', (apellido) => {
    readline.question('Año de ingreso: ', (anioIngreso) => {
      readline.question('Cuota mensual: ', (cuotaInput) => {
        
        const nombreMayus = nombre.toUpperCase();
        const apellidoMayus = apellido.toUpperCase();
        const tresLetrasApellido = apellido.slice(0, 3);
        
        // Conversión a texto y obtención de los últimos dos dígitos
        const ultimosDosAnio = anioIngreso.toString().slice(-2);
        
        // Conversión a número y formato de dos decimales
        const cuotaMensual = parseFloat(cuotaInput).toFixed(2);

        console.log('\nResultados');
        console.log(`Nombre completo: ${nombreMayus} ${apellidoMayus}`);
        console.log(`Primeras 3 letras del apellido: ${tresLetrasApellido}`);
        console.log(`Últimos 2 dígitos del año: ${ultimosDosAnio}`);
        console.log(`Cuota mensual: $${cuotaMensual}`);

        readline.close();
      });
    });
  });
});