var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let data =  lines.shift();  //"02/08/10"

let partes = data.split("/") // transformando em vetor

let dia = partes[0];
let mes = partes[1];
let ano = partes[2];

// Formatando a data data no formato MM/DD/AA;
console.log(`${mes}/${dia}/${ano}`);

// Formatando a data no formato AA/MM/DD
console.log(`${ano}/${mes}/${dia}`);

// Formtando a data no formato  DD-MM-AA.
console.log(`${dia}-${mes}-${ano}`);







