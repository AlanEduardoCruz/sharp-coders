var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Lê o caractere que indica a operação a ser realizada (soma ou média) da entrada.
let operacao = lines.shift();

// Inicializa uma variável 'soma' com zero para armazenar a soma dos elementos.
let soma = 0;

// Inicializa uma matriz vazia 'matriz' para armazenar os valores da matriz 12x12.
let matriz = [];

// Loop que percorre as 12 linhas da matriz.
for (let i = 0; i < 12; i++) {
    // Inicializa um array vazio dentro da matriz para representar cada linha da matriz.
    matriz[i] = [];
    // Loop que percorre as 12 colunas da matriz.
    for (let j = 0; j < 12; j++) {
        // Lê um valor da entrada, converte para ponto flutuante e o armazena na matriz na posição [i][j].
        matriz[i][j] = parseFloat(lines.shift());
    }
}

// Loop que percorre novamente as 12 linhas da matriz.
for (let i = 0; i < 12; i++) {
    // Loop que percorre novamente as 12 colunas da matriz.
    for (let j = 0; j < 12; j++) {
        // Verifica se a soma dos índices da linha 'i' e coluna 'j' é maior que 11.
        if (i + j > 11) {
            // Se a condição for verdadeira, adiciona o valor da matriz na posição [i][j] à variável 'soma'.
            soma = soma + matriz[i][j];
        }
    }
}

// Inicializa uma variável 'resultado' com zero.
let resultado = 0;

// Verifica se a operação é de soma ('S') ou média ('M') e calcula o resultado correspondente.
if (operacao === 'S') {
    resultado = soma; // Se for de soma, 'resultado' recebe o valor de 'soma'.
} else {
    // Se for de média, 'resultado' recebe a divisão de 'soma' pelo número de elementos (144 - 12) / 2.
    resultado = soma / ((144 - 12) / 2);
}

// Imprime o 'resultado' com uma casa decimal.
console.log(resultado.toFixed(1));
