var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  
  const space = " "
  const [codigo1, qtde1, valor1] = lines[0].split(space);
  const [codigo2, qtde2, valor2] = lines[1].split(space);

  const valorPago = (qtde1 * valor1) +  (qtde2 * valor2);

  console.log(`TOTAL A PAGAR: ${valorPago.toFixed(2)}`);

