var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();
let soma = 0;
let matriz = [];


for(let i = 0; i < 12; i++){
    matriz[i] = [];
    for(let j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(lines.shift());
    }

}
for(let i = 0; i < 12; i++){
    for(let j = 0; j < 12; j++){      
        if(i + j < 11){
            soma = soma + matriz[i][j];
        }       
    }
}
let resultado = 0;

if(operacao === 'S'){
    resultado = soma;
}else{
    resultado = soma / ((144 - 12) / 2);
}
console.log(resultado.toFixed(1));