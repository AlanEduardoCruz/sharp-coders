var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
  for (let i = 1, j = 60; i <= 37; i += 3, j -= 5) {
    console.log(`I=${i} J=${j}`);
  }
}
