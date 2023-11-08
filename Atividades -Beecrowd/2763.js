var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let num = lines.shift();

let n1 = num.substring(0,3);
let n2 = num.substring(4,7)
let n3 = num.substring(8,11)
let n4 = num.substring(12,14)

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)