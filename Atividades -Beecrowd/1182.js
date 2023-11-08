var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let cont = parseInt(lines.shift()); // Lê um número inteiro da entrada e armazena em 'cont'.
let op = lines.shift(); // Lê uma operação (uma letra 'S' ou 'M') da entrada e armazena em 'op'.

let soma = 0; // Inicializa a variável 'soma' com 0 para acumular valores.
let result = 0; // Inicializa a variável 'result' com 0 para armazenar o resultado final.

// Um loop aninhado que percorre as linhas e colunas de uma matriz 12x12.
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    let n = parseInt(lines.shift()); // Lê um número da entrada e armazena em 'n'.
    if (j === cont) {
      soma += n; // Se a coluna 'j' for igual ao valor de 'cont', adiciona 'n' à variável 'soma'.
    }
  }
}

// Verifica o valor de 'op' para decidir se calcular a soma ('S') ou a média ('M').
if (op === 'S') {
  result = soma; // Se 'op' for 'S', 'result' recebe a soma.
} else {
  result = soma / 12; // Se 'op' for 'M', 'result' recebe a média (soma dividida por 12).
}

console.log(result.toFixed(1)); // Imprime o resultado com uma casa decimal.

