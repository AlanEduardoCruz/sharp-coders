var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

  let salario = parseFloat(lines.shift());
  let imposto = 0.0;

  if (salario > 0 && salario <= 2000) {
    console.log("Isento");

  } else if (salario >= 2000 && salario <= 3000) {
    imposto = ((salario - 2000) * 8) / 100;
    console.log(`R$ ${imposto.toFixed(2)}`);

  } else if (salario >= 3000 && salario <= 4500) {
    imposto = ((salario - 3000) * 18) / 100 + (1000 * 8) / 100;
    console.log(`R$ ${imposto.toFixed(2)}`);
  } else {
    imposto =
      ((salario - 4500) * 28) / 100 + (1500 * 18) / 100 + (1000 * 8) / 100;
    console.log(`R$ ${imposto.toFixed(2)}`);
  }

