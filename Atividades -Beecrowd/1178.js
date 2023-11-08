var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  let valor = parseFloat(lines.shift());

  let vetor = [];

  vetor[0] = valor;

  for (let i = 0; i < 100; i++) {
    vetor[i] = valor;
    valor = valor / 2.0;
  }
  for (let i = 0; i < 100; i++) {
    let numeroFormatado = vetor[i].toLocaleString("en-US", {
      minimumFractionDigits: 4,
      useGrouping: false,
    });
    console.log(`N[${i}] = ${numeroFormatado}`);
  }

