
var lines = input.split('\n');leSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

  let valores = [0,-5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,63,230]; // Inicialize como uma array vazia para armazenar os valores de entrada

for (let i = 0; i < 20; i++) {
  valores.push(valores[i]); // Lê os 20 valores de entrada e os armazena em 'valores'
}//valores.push(parseInt(lines.shift()));

let novaArray = []; // Inicialize uma nova array para armazenar os valores invertidos

for (let i = 19; i >= 0; i--) {
  novaArray.push(valores[i]); // Inverte os valores de 'valores' e os armazena em 'novaArray'
}

for (let i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${novaArray[i]}`); // Exibe os valores invertidos no formato "N[i] = Y"
}



