var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');



  // Lê um valor inteiro "x" da entrada
  let x = parseInt(lines.shift());

  // Inicia um loop "for" de 0 até "x", inclusive
  for (let i = 0; i <= x; i++) {
    // Calcula o resto da divisão de "i" por 2
    let resto = i % 2;

    // Verifica se o resto é diferente de zero (ou seja, se "i" é ímpar)
    if (resto != 0) {
      // Se for ímpar, imprime o valor de "i"
      console.log(i);
    }
  }

