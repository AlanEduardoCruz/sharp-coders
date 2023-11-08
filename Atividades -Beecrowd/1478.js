var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var N = parseInt(lines.shift());
  
    // Verifica se N é igual a zero e, se for, sai do loop
    if (N === 0) {
      break;
    }
  
    // Inicializa uma matriz vazia
    var matriz = [];
  
    // Preenche a matriz com os valores
    for (var i = 0; i < N; i++) {
      matriz.push([]);
      for (var j = 0; j < N; j++) {
        // Calcula o valor com base na diferença entre i e j, adicionando 1
        matriz[i].push(Math.abs(i - j) + 1);
      }
    }
  
    // Imprime a matriz formatada
    for (var i = 0; i < N; i++) {
      var linha = '';
      for (var j = 0; j < N; j++) {
        // Formata cada valor com espaços à esquerda para ter 3 dígitos
        linha += matriz[i][j].toString().padStart(3, ' ');
  
        // Adiciona um espaço entre os valores, exceto para o último valor na linha
        if (j < N - 1) {
          linha += ' ';
        }
      }
  
      // Imprime a linha
      console.log(linha);
    }
  
    // Imprime uma linha em branco entre as matrizes
    console.log('');
  }
  