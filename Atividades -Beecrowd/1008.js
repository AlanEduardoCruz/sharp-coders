var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    // Variaveis
    const numFuncionario = parseInt(lines.shift());
    const horasTrabalhada = parseInt(lines.shift());
    const valorPorHora = parseFloat(lines.shift());
    
    // Calculo do salário
    const salarioFuncionario = horasTrabalhada * valorPorHora;
    
    // Imprimindo resultado

    console.log(`NUMBER = ${numFuncionario}\nSALARY = U$ ${salarioFuncionario.toFixed(2)}`);
  