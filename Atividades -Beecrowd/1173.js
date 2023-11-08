var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//     let V = parseInt(lines.shift()); // Lê o valor V da entrada e converte para inteiro.
//     let N = []; // Inicializa um vetor vazio N para armazenar os valores calculados.
  
//     N[0] = V; // Define o primeiro elemento do vetor N com o valor de V.
  
//     // Preenche os elementos do vetor N a partir do segundo elemento (i = 1).
//     for (let i = 1; i < 10; i++) {
//       N[i] = N[i - 1] * 2; // Calcula o dobro do valor do elemento anterior e atribui a N[i].
//     }
  
//     // Exibe o vetor N no formato especificado.
//     for (let i = 0; i < 10; i++) {
//       console.log(`N[${i}] = ${N[i]}`); // Imprime cada elemento do vetor N com sua posição.
//     }
//   }

let number = parseInt(lines.shift());

for(let i = 0; i < 10; i++){  
  console.log(`N[${i}] = ${number}`);
  number*=2;
  
}
