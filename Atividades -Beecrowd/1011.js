var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

   const raio = parseFloat(lines.shift())
   const PI = 3.14159

   let volume = (4/3.0) * PI * Math.pow(raio, 3);

   console.log(`VOLUME = ${volume.toFixed(3)}`)
    
  