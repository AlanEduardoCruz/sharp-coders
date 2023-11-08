var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  let n = parseInt(lines.shift());
  let pares = 0;

  for (let i = 1; i <= n; i++) {
    let resto = i % 2; // ficar atento e usar sempre a variavel i;
    if (resto === 0) {
      pares++;
      console.log(`${i}^2 = ${i * i}`); // imprimir sempre o valor i
    }
  }
}
