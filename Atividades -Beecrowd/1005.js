
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const notaA = parseFloat(lines.shift());
const notaB = parseFloat(lines.shift());

// Peso das notas

const  pesoNotaA = 3.5;
const  pesoNotaB = 7.5;

// Soma dos pesos

const somaDosPesos = (pesoNotaA + pesoNotaB);

// Calculo da média

const  mediaDoAluno = ((notaA * pesoNotaA) + (notaB * pesoNotaB)) / somaDosPesos;

// Mensagem

console.log(`MEDIA = ${mediaDoAluno.toFixed(5)}`);


