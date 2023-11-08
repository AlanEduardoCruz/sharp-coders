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
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    if (i > j && i < 12 - j - 1) {
      soma = soma + matriz[i][j];
      cont = cont + 1;
    }
  }
}
let resultado = 0;

if (operacao === 'S') {
  resultado = soma;
} else {
  resultado = soma / cont;
}
console.log(resultado.toFixed(1))