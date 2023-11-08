var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    // Variaveis

    // const[nome, salario, vendas] = lines
    
    // // Calculo do salário
    // const salarioTotal = ((parseFloat(vendas) * 15) / 100) + parseFloat(salario)
 
    
     
    // Variaveis
    
    const nome = lines.shift();
    const salario = parseFloat(lines.shift());
    const vendas = parseFloat(lines.shift());
    
    // Calculo total do salario
    
    const salarioTotal = (vendas * 0.15) + salario;
    
    // Imprimindo o resultado
    
    console.log(`TOTAL = ${salarioTotal.toFixed(2)}`);
