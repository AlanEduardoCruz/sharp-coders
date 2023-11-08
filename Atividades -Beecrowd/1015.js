var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  
const space = " ";
const [x1, y1] = lines[0].split(space).map(Number);
const [x2, y2] = lines[1].split(space).map(Number);

// Calculo

const result = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
const distancia = Math.sqrt(result);

// imprimindo resultado

console.log(distancia.toFixed(4));


  

