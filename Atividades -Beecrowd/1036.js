var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    const space = " ";
    const [a, b, c] = lines[0].split(space).map(parseFloat);
    
    // calculos
    const delta = Math.pow(b, 2) -4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    // imprimindo os valores
    
    delta < 0 || a == 0 ? console.log("Impossivel calcular"):
    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);

