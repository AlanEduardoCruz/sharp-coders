
var lines = input.split('\n');leSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
let vetor = [1000];

for (let i = 0; i < vetor; i++) {
  console.log(`N[${i}] = ${i % valor}`);
}
