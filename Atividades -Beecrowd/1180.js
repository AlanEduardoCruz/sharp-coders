
var lines = input.split('\n');leSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

  let N = parseInt(lines.shift())
  let valores = lines.shift().split(' ').map(Number)


let menorValor = Math.min(...valores);
let menorPosicao = 0;
  for(let i = 0; i < N;  i++){
    if(valores[i] == menorValor) {   
      menorPosicao = i;
    }

}


console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${menorPosicao}`);

