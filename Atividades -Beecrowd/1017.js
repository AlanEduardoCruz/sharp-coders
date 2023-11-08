var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    const tempoViagem = parseInt(lines.shift());
    const velocidadeMedia = parseInt(lines.shift());
    const quilometroPorLitro = 12;

    const qtdeLitros = (velocidadeMedia / quilometroPorLitro) * tempoViagem;

    console.log(qtdeLitros.toFixed(3));   
