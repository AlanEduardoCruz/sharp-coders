var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    
    const raio = parseFloat(lines[0])
    const pi = 3.14159;
 

    const area = pi * raio ** 2;

    console.log(`A=${area.toFixed(4)}`)


