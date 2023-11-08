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
    if (i < j && i < 12 - j - 1) {
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
console.log(resultado.toFixed(1));

/*
    OUTRA FORMA DE FAZE-LO

   // Lê o caractere que indica a operação (Soma ou Média) a ser realizada a partir da entrada.
let operacao = lines.shift();

// Inicializa uma variável 'soma' com zero para armazenar a soma dos elementos.
let soma = 0;

// Inicializa uma matriz vazia 'matriz' para armazenar os valores da matriz 12x12.
let matriz = [];

// Inicializa uma variável 'cont' com zero para contar o número de elementos somados.
let cont = 0;

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

// Loop que percorre as linhas da matriz da linha 0 à linha 4.
for (let i = 0; i <= 4; i++) {
    // Loop que percorre as colunas da matriz começando da coluna i + 1 até a coluna 10 - i.
    for (let j = i + 1; j <= 10 - i; j++) {
        // Adiciona o valor da matriz na posição [i][j] à variável 'soma'.
        soma = soma + matriz[i][j];
        // Incrementa o contador 'cont' para registrar a quantidade de elementos somados.
        cont = cont + 1;
    }
}

// Inicializa uma variável 'resultado' com zero.
let resultado = 0;

// Verifica se a operação é de soma ('S') ou média ('M') e calcula o resultado correspondente.
if (operacao === 'S') {
    resultado = soma; // Se for de soma, 'resultado' recebe o valor de 'soma'.
} else {
    // Se for de média, 'resultado' recebe a divisão de 'soma' pelo 'cont' (número de elementos somados).
    resultado = soma / cont;
}

// Imprime o 'resultado' com uma casa decimal.
console.log(resultado.toFixed(1));

*/