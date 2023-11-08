var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  //Variaveis
  const A = parseInt(lines.shift());
  const B = parseInt(lines.shift());
  // calculo
  const X = A + B;
  
  //Mensagem
  console.log(`X = ${X}`);

