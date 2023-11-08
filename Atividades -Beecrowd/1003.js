var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
 
    const a = parseInt(lines.shift());
    const b = parseInt(lines.shift());

    const soma = a + b;

    console.log(`SOMA = ${soma}`);


