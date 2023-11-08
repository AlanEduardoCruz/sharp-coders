var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    const x = parseInt(lines.shift());
    const y = parseFloat(lines.shift());
  
  
    const distancia =  x / y;
    
  
    console.log(`${distancia.toFixed(3)} km/l`);
  
  