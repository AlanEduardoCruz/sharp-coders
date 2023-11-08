var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  
  // const[a, b, c] = lines[0].split(space).map(Number);

  // const entrada = lines.shift().split(" ");

  const a = parseInt(lines.shift());
  const b = parseInt(lines.shift());
  const c = parseInt(lines.shift());

  const maiorAB = (a + b + Math.abs(a - b)) / 2;
  const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

  console.log(`${maiorABC} eh o maior`);

