var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  for (let i = 0; i < 10; i++) {
    let x = [];
    x[i] = parseInt(lines.shift());

    if (x[i] <= 0) {
      x[i] = 1; // alterando valor do vetor
    }
    console.log(`X[${[i]}] = ${x[i]}`);
  }


/*
 Codigo comentado 

 let x = []; // Inicializando um vetor vazio para armazenar valores.

for (let i = 0; i < 10; i++) {
    x[i] = parseInt(lines.shift()); // Lendo um valor da entrada e convertendo para inteiro.

    if (x[i] <= 0) {
      x[i] = 1; // Alterando o valor do vetor para 1 se for menor ou igual a zero.
    }

    console.log(`X[${i}] = ${x[i]}`); // Exibindo o valor atual do vetor no formato correto.
}


*/
