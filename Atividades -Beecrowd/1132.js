let Y = 200; // Inicializa a variável Y com o valor 200.
let soma = 0; // Inicializa a variável soma com o valor 0.

if (X < Y) {
  // Se X for menor do que Y...
  for (let i = X; i <= Y; i++) {
    // ...então, para cada número de X até Y (inclusive)...
    if (i % 13 != 0) {
      // ...se o número não for divisível por 13...
      soma += i; // ...adicione o número à variável soma.
    }
  }
} else {
  // Caso contrário (se X não for menor que Y)...
  for (let i = Y; i <= X; i++) {
    // ...para cada número de Y até X (inclusive)...
    if (i % 13 != 0) {
      // ...se o número não for divisível por 13...
      soma += i; // ...adicione o número à variável soma.
    }
  }
}

console.log(Number(soma)); // Imprime o valor da variável soma convertido
