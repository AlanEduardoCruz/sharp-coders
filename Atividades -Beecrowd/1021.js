var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    let valor = parseFloat(lines.shift());
    let resultNotas = 0;
    let resultMoedas = 0;
  
    const notas = [100, 50, 20, 10, 5, 2];
    const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
  
    
  
    console.log("NOTAS:");
    resultNotas = parseInt(valor / 100);
    console.log(`${resultNotas} nota(s) de R$ 100.00`);
    valor = valor % 100;
    resultNotas = parseInt(valor / 50);
    console.log(`${resultNotas} nota(s) de R$ 50.00`);
    valor = valor % 50;
    resultNotas = parseInt(valor / 20);
    console.log(`${resultNotas} nota(s) de R$ 20.00`);
    valor = valor % 20;
    resultNotas = parseInt(valor / 10);
    console.log(`${resultNotas} nota(s) de R$ 10.00`);
    valor = valor % 10;
    resultNotas = parseInt(valor / 5);
    console.log(`${resultNotas} nota(s) de R$ 5.00`);
    valor = valor % 5;
    resultNotas = parseInt(valor / 2);
    console.log(`${resultNotas} nota(s) de R$ 2.00`);
    valor = valor % 2;
    
    console.log("MOEDAS:");
    resultMoedas = parseInt(valor / 1);
    console.log(`${resultMoedas} moeda(s) de R$ 1.00`);
    valor = valor % 1;
    resultMoedas = parseInt(valor / 0.50);
    console.log(`${resultMoedas} moeda(s) de R$ 0.50`);
    valor = valor % 0.50;
    resultMoedas = parseInt(valor / 0.25);
    console.log(`${resultMoedas} moeda(s) de R$ 0.25`);
    valor = valor % 0.25;
    resultMoedas = parseInt(valor / 0.10);
    console.log(`${resultMoedas} moeda(s) de R$ 0.10`);
    valor = valor % 0.10;
    resultMoedas = parseInt(valor / 0.05);
    console.log(`${resultMoedas} moeda(s) de R$ 0.05`);
    valor = valor % 0.05;
    resultMoedas = parseFloat(valor / 0.01);
    console.log(`${resultMoedas.toFixed(0)} moeda(s) de R$ 0.01`);
    valor = valor % 0.01;
   




// Declarando as  Variaveis

// let valor = parseFloat(lines.shift());

// const notas = [100, 50, 20, 10, 5, 2];
// const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

// // Imprmindo texto

// console.log("NOTAS");

// // Criando primeira estrutura

// for(let nota of notas){
//     let resultNotas = parseInt(valor /  nota);
//     console.log(`${resultNotas}  nota(s) de R$ ${nota}`);
//     valor = valor % nota;
// }

// console.log("MOEDAS");

// for(let moeda of moedas){
//     let resultMoedas = parseInt(valor / moeda);
//     console.log(`${resultMoedas} moeda(s) de R$ ${moeda}`);
    
    
// }


