var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let operacao = lines.shift(); // Lê a operação ('S' para soma ou 'M' para média) da entrada.

let soma = 0; // Inicializa a variável soma para armazenar a soma dos elementos.

// Matriz linha com 12 elementos na array
for (let i = 0; i < 12; i++) {
  // Matriz coluna com 12 elementos na array
  for (let j = 0; j < 12; j++) {
    let n = parseFloat(lines.shift()); // Lê um número da entrada e converte para ponto flutuante.
    if (i < j) {
      soma = soma + n; // Soma apenas os elementos acima da diagonal principal da matriz.
    }
  }
}

let resultado = 0; // Inicializa a variável resultado para armazenar o resultado final.

if (operacao === 'S') {
  resultado = soma; // Se a operação for soma ('S'), o resultado é a soma dos elementos.
} else {
  // Se a operação for média ('M'), o resultado é a soma dividida pelo número de elementos na área verde da matriz.
  resultado = soma / ((144 - 12) / 2); // O número de elementos da matriz em verde é calculado como (144 - 12) / 2.
}

console.log(resultado.toFixed(1)); // Imprime o resultado com uma casa decimal.
