var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


    let qtdeDias = parseInt(lines.shift());

    const qtdeAnos = parseInt(qtdeDias / 365);
    qtdeDias = qtdeDias % 365;

    const qtdeMeses = parseInt(qtdeDias / 30);
    qtdeDias = qtdeDias % 30;

    console.log(`${qtdeAnos} ano(s)`);
    console.log(`${qtdeMeses} mes(es)`);
    console.log(`${qtdeDias} dia(s)`);

    // let qtdeDias = parseInt(lines.shift());
    // const valores =[365, 30, 1];
    // const resultado = [];

    // for(let valor of valores){
    //     resultado.push(parseInt(qtdeDias / valor));
    //     qtdeDias = qtdeDias % valor;
    // }
    
    // console.log(resultado[0] + " ano(s)");
    // console.log(resultado[1] + " mes(es)");
    // console.log(resultado[2] + " dia(s)");





