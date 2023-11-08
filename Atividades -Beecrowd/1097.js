// Inicializa a variável "num" com o valor 7.
let num = 7;

// Inicia um loop externo com a variável "i" que varia de 1 a 9.
for (let i = 1; i < 10; i++) {
  // Inicia um loop interno com a variável "j" que varia de 3 a 1.
  for (let j = 3; j > 0; j--) {
    // Imprime a mensagem no console com os valores de "i" e "num".
    console.log(`I=${i} J=${num}`);
    // Diminui o valor de "num" em 1 a cada iteração do loop interno.
    num = num - 1;
  }

  // Incrementa o valor de "i" em 1 a cada iteração do loop externo.
  i = i + 1;

  // Aumenta o valor de "num" em 5 a cada iteração do loop externo.
  num = num + 5;
}


for(let i =1; i<=10; i +=2){
  console.log(`I=${i} J=${i + 6}`)
  console.log(`I=${i} J=${i + 5}`)
  console.log(`I=${i} J=${i + 4}`)
}
