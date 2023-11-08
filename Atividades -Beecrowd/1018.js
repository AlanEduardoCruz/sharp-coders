var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//   let valor = parseInt(lines.shift());
//   console.log(valor);

//   const notas = [100, 50, 20, 10, 5, 2, 1];

//   for (let nota of notas) {
//     let resultNotas = parseInt(valor / nota);
//     console.log(`${resultNotas} nota(s) de R$ ${nota},00`);
//     valor %= nota;
//   }

  let valor = parseInt(lines.shift());
  console.log(valor);

  let resultNotas = parseInt(valor / 100);
  console.log(`${resultNotas} nota(s)  de R$ ${100},00`);
  valor = valor % 100;

  resultNotas = parseInt(valor / 50);
  console.log(`${resultNotas} nota(s)  de R$ ${50},00`);
  valor = valor % 50;

  resultNotas = parseInt(valor / 20);
  console.log(`${resultNotas} nota(s)  de R$ ${20},00`);
  valor = valor % 20;

  resultNotas = parseInt(valor / 10);
  console.log(`${resultNotas} nota(s)  de R$ ${10},00`);
  valor = valor % 10;

  resultNotas = parseInt(valor / 5);
  console.log(`${resultNotas} nota(s)  de R$ ${5},00`);
  valor = valor % 5;

  resultNotas = parseInt(valor / 2);
  console.log(`${resultNotas} nota(s)  de R$ ${2},00`);
  valor = valor % 2;

  resultNotas = parseInt(valor / 1);
  console.log(`${resultNotas} nota(s)  de R$ ${1},00`);
  valor = valor % 1;


