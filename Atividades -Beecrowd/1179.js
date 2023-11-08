var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Declaração de arrays para armazenar números pares e ímpares
let par = [];
let impar = [];

// Variáveis para controlar a quantidade de números pares e ímpares em seus respectivos arrays
let qtdeImpar = 0;
let qtdePar = 0;

// Loop que irá iterar 15 vezes para receber os números e classificá-los
for (let i = 0; i < 15; i++) {
  // Recebe um número inteiro
  let x = parseInt(lines[i]);

  // Verifica se o número é par
  if (x % 2 === 0) {
    // Armazena o número par no array 'par' na posição apropriada
    par[qtdePar] = x;

    // Incrementa a contagem de números pares
    qtdePar++;

    // Quando atingir 5 números pares, imprime e reinicia o array e a contagem
    if (qtdePar === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`par[${j}] = ${par[j]}`);
      }
      qtdePar = 0;
    }
  } else {
    // Se o número for ímpar, armazena no array 'impar' na posição apropriada
    impar[qtdeImpar] = x;

    // Incrementa a contagem de números ímpares
    qtdeImpar++;

    // Quando atingir 5 números ímpares, imprime e reinicia o array e a contagem
    if (qtdeImpar === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`impar[${j}] = ${impar[j]}`);
      }
      qtdeImpar = 0;
    }
  }
}

// Imprime os números ímpares que sobraram no array 'impar'
for (let i = 0; i < qtdeImpar; i++) {
  console.log(`impar[${i}] = ${impar[i]}`);
}

// Imprime os números pares que sobraram no array 'par'
for (let i = 0; i < qtdePar; i++) {
  console.log(`par[${i}] = ${par[i]}`);
}
