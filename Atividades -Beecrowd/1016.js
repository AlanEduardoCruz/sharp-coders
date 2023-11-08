var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    const distancia = parseInt(lines.shift());

    const tempo = distancia * 2;

    console.log(`${tempo} minutos`);


  