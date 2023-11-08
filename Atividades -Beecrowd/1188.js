var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();

let soma = 0;
let matriz = [];
let cont = 0;

for (let i = 0; i < 12; i++) {
  matriz[i] = [];
  for (let j = 0; j < 12; j++) {
    matriz[i][j] = parseFloat(lines.shift());
  }
}

for (let i = 7; i <= 11; i++) {
  for (let j = 11 -i + 1; j <= i -1; j++) {
    soma = soma + matriz[i][j];

    cont = cont + 1;
  }
}

let resultado = 0;

if (operacao === 'S') {
  resultado = soma; 
} else {
  resultado = soma / cont;
}

console.log(resultado.toFixed(1));
