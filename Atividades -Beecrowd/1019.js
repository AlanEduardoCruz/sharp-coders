var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
// Define uma variável "qtdSegundos" com o valor de entrada
let qtdSegundos = 556;

// Calcula a quantidade de horas a partir dos segundos.
const qtdHoras = parseInt(qtdSegundos / 3600);

// Atualiza "qtdSegundos" para conter o valor restante após calcular as horas.
qtdSegundos = qtdSegundos % 3600;

// Calcula a quantidade de minutos a partir dos segundos restantes.
const qtdeMinutos = parseInt(qtdSegundos / 60);

// Atualiza "qtdSegundos" para conter o valor restante após calcular os minuto
qtdSegundos = qtdSegundos % 60;

// Imprime o resultado no formato "horas:minutos:segundos"
console.log(`${qtdHoras}:${qtdeMinutos}:${qtdSegundos}`);

// Realizando com vetores;

// let qtdSegundos = parseInt(lines.shift());
//    const valores = [3600, 60, 1];
//    const resultado = [];

//   for (let valor of valores) {
//   resultado.push(parseInt(qtdSegundos / valor));
//   qtdSegundos = qtdSegundos % valor;
//    }
//     console.log(resultado.join(":"));
// }

// let N = 556; // Valor total de segundos

// // Converte segundos para horas
// let horas = parseInt(N / 3600);
// N = N % 3600; // Calcula os segundos restantes após a conversão para horas

// // Converte os segundos restantes em minutos
// let minutos = parseInt(N / 60);
// N = N % 60; // Calcula os segundos restantes após a conversão para minutos

// // Exibe o resultado no formato "horas:minutos:segundos"
// console.log(`${horas}:${minutos}:${N}`);
