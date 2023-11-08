var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  let maiorValor = 0; // Inicializa a variável 'maior' com 0
  let posicao = 0; // Inicializa a variável 'posicao' com 0

  for (let i = 1; i <= 100; i++) {
    // Começa um loop de 1 a 100
    let valor = parseInt(lines.shift()); // Obtém um valor inteiro a partir da entrada

    if (valor > maiorValor) {
      // Verifica se o valor é maior que o valor atual em 'maior'
      maiorValor = valor; // Se for maior, atualiza 'maior' com o novo valor
      posicao = i; // Atualiza 'posicao' com o valor de 'i'
    }
  }

  console.log(maiorValor); // Imprime o maior valor encontrado
  console.log(posicao); // Imprime a posição (i) em que o maior valor foi encontrado
}
