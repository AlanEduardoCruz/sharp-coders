var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    let totalValores = parseInt(lines.shift());
    let dentro =0;
    let fora =0;
    
    // Estrutura
    for(let i=0; i < totalValores; i++){
        let valores = parseInt(lines.shift());
        if(valores >=10 && valores <=20){
            dentro++;
        }else{
            fora++;
        }
    }
    console.log(dentro + " in");
    console.log(fora + " out");

