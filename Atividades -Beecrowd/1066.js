var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  let pares = 0;
  let impares = 0;
  let positivos = 0;
  let negativos = 0;

  // Estrutura

  for (let i = 0; i < lines.length; i++) {
    let valores = parseInt(lines[i]);
  
    if ( valores % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
    if (valores > 0) {
      positivos++;
    } else if (valores < 0) {
      negativos++;
    }
  }
  console.log(`${pares} valor(es) par(es)`);
  console.log(`${impares} valor(es) impar(es)`);
  console.log(`${positivos} valor(es) positivo(s)`);
  console.log(`${negativos} valor(es) negativo(s)`);

