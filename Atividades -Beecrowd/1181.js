var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  // Lê a primeira linha do array 'lines' como um número inteiro e armazena em 'linha'.
  let linha = parseInt(lines.shift());

  // Lê a segunda linha do array 'lines' e remove quaisquer espaços em branco em excesso.
  let operacao = lines.shift().trim();

  // Cria uma matriz vazia para armazenar os valores.
  let matriz = [];

  // Inicializa as variáveis 'soma' e 'elementos' com zero.
  let soma = 0;
  let elementos = 0;

  // Loop aninhado para preencher a matriz e calcular a soma dos elementos da linha específica.
  for (let i = 0; i < 12; i++) {
    matriz.push([]); // Cria uma linha vazia na matriz.
    for (let j = 0; j < 12; j++) {
      matriz[i][j] = parseInt(lines.shift()); // Lê um valor e o armazena na matriz.
      if (i === linha) {
        soma += matriz[i][j]; // Se a linha atual for igual à 'linha' lida, adiciona o valor à soma.
        elementos++; // Incrementa o contador de elementos.
      }
    }
  }

  // Se a operação for 'M' (média), divide a soma pelo número de elementos.
  if (operacao === "M") {
    soma /= elementos;
  }

  // Exibe a soma (ou média) formatada com uma casa decimal.
  console.log(soma.toFixed(1));

