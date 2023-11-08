var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    const pi = 3.14159;
    const [a, b, c] = lines[0].split(" ").map(Number);

    // realizando os calculos    
    const areaTriangulo = a * c / 2;
    const areaCirculo = pi * Math.pow(c, 2);
    const areaTrapezio = ((a + b) * c) / 2;
    const areaQuadrado = b * b;
    const areaRetangulo = a * b;
    
    // imprimindo resultados;    
    console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
    console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
