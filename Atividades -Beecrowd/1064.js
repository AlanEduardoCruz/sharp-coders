var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


  let positivo = 0; // Inicializa contador de valores positivos
  let media = 0; // Inicializa variável para calcular a média

  // Loop para percorrer os elementos do array "lines"
  for (let i = 0; i <= lines.length; i++) {
    let valor = parseFloat(lines[i]); // Converte o valor em número

    if (valor > 0) {
      positivo++; // Incrementa o contador se o valor for positivo
      media += valor; // Acumula o valor para calcular a média
    }
  }

  if (positivo > 0) {
    media /= positivo; // Calcula a média dos valores positivos
  }

  console.log(positivo + " valores positivos"); // Exibe a contagem de valores positivos
  console.log(media.toFixed(1)); // Exibe a média dos valores positivos (se houver)
  // console.log(lines); // Exibe o array original para depuração

