var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Lê o número de casos do teste de entrada
let T = parseInt(lines.shift());

// loop que itera sobre cada caso de teste
for (let i = 0; i < T; i++) {
    // Lê o valor de N para o caso de teste atual
    let N = parseInt(lines.shift());
    
    // Inicializa os dois primeiros valores de fibonacci
    let f1 = 0;
    let f2 = 1;

// loop para calcular o valor do N-ésimo número de Fibonancci
  for (let j = 0; j < N; j++) {
    // Troca os valores de f1 e f2
    let temp = f1;
    f1 = f2;
    f2 = temp + f2;
  }
  // Imprime o resultado da sequência de fibonacci oara o valor de N.
  console.log(`Fib(${N}) = ${f1}`);
}
