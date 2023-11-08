var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  let x = parseInt(lines.shift()); // Lê um valor inteiro da entrada e atribui-o à variável 'x'.
  let impar = 0; // Inicializa uma variável 'num' com o valor 0.

    while (impar < 6) {
      // Enquanto 'num' for menor que 6, faça o seguinte:
       let resto = x % 2; // Calcule o resto da divisão de 'x' por 2 e atribua a 'resto'.

      if (resto != 0) {
        // Se 'resto' for diferente de 0 (ou seja, se 'x' for ímpar), faça o seguinte:
        console.log(x); // Imprima o valor de 'x'.
        impar++; // Incremente 'num' em 1.
      }
      x++ // Incremente 'x' em 1.
    }
  

 