var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  let N = parseInt(lines.shift());

  for (let i = 1; i <= 10; i++) {
    let tabuada = i * N;
    console.log(`${i} x ${N} = ${tabuada}`);
  }
}
