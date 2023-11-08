var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  let vetor = [];

  for (let i = 0; i < 100; i++) {
    vetor[i] = parseFloat(lines.shift());

    if (vetor[i] <= 10) {
      vetor[i];
      console.log(`A[${i}] = ${vetor[i].toFixed(1)}`);
    }
  }

