var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let operacao = lines.shift(); // Lê a operação ('S' para soma ou 'M' para média) da entrada.

let soma = 0; // Inicializa a variável soma para armazenar a soma dos elementos.

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    let m = parseFloat(lines.shift()); // Lê um valor da entrada e converte para ponto flutuante.
    if (j < i) {
      soma = soma + m; // Soma apenas os elementos onde j < i (abaixo da diagonal principal).
    }
  }
}

let resultado = 0; // Inicializa a variável resultado para armazenar o resultado final.

if (operacao === 'S') {
  resultado = soma; // Se a operação for soma ('S'), o resultado é a soma dos elementos.
} else {
  // Se a operação for média ('M'), o resultado é a soma dividida pelo número de elementos abaixo da diagonal principal.
  resultado = soma / ((144 - 12) / 2); // O número de elementos abaixo da diagonal principal é calculado como (12 * 12 - 12) / 2.
}

console.log(resultado.toFixed(1)); // Imprime o resultado com uma casa decimal.

/*

OUTRA FORMA DE FAZER O CODIGO 


let operacao = lines.shift(); // Lê a operação ('S' para soma ou 'M' para média) da entrada.

let matriz = []; // Inicializa um array bidimensional para representar a matriz.

let soma = 0; // Inicializa a variável soma para armazenar a soma dos elementos.

// Preenche a matriz com valores da entrada
for (let i = 0; i < 12; i++) {
    matriz[i] = []; // Inicializa uma nova linha da matriz
    for (let j = 0; j < 12; j++) {
        matriz[i][j] = parseFloat(lines.shift()); // Lê um valor da entrada e converte para ponto flutuante.
    }
}

// Calcula a soma dos elementos abaixo da diagonal principal da matriz
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (j < i) {
            soma = soma + matriz[i][j];
        }
    }
}

let resultado = 0; // Inicializa a variável resultado para armazenar o resultado final.

if (operacao === 'S') {
    resultado = soma; // Se a operação for soma ('S'), o resultado é a soma dos elementos.
} else {
    // Se a operação for média ('M'), o resultado é a soma dividida pelo número de elementos abaixo da diagonal principal.
    resultado = soma / ((144 - 12) / 2); // O número de elementos abaixo da diagonal principal é calculado como (144 - 12) / 2.
}

console.log(resultado.toFixed(1)); // Imprime o resultado com 1 casa decimal.
*/
