var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    const notaA = parseFloat(lines.shift());
    const notaB = parseFloat(lines.shift());
    const notaC = parseFloat(lines.shift());
  
    // Peso das notas
  
    const pesoNotaA = 2;
    const pesoNotaB = 3;
    const pesoNotaC = 5;
  
    // Soma dos pesos
  
    const somaDosPesos = pesoNotaA + pesoNotaB + pesoNotaC;
  
    // Calculo da média
  
    const mediaDoAluno = (notaA * pesoNotaA + notaB * pesoNotaB + notaC * pesoNotaC) / somaDosPesos;
  
    // Mensagem
  
    console.log(`MEDIA = ${mediaDoAluno.toFixed(1)}`);
  
  