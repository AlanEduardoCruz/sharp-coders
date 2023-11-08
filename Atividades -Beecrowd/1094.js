var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    // Estrutura

    for (let i = 0; i < lines.length; i++) {
        let [qtde, tipo] = lines[i].split(" ");

        if (tipo === 'C') {
            totalCoelhos += parseInt(qtde);
            totalCobaias += parseInt(qtde);

        } else if (tipo === 'R') {
            totalRatos += parseInt(qtde);
            totalCobaias += parseInt(qtde);

        } else if (tipo === 'S') {
            totalSapos += parseInt(qtde);
            totalCobaias += parseInt(qtde);
        }
    }

    // Variaveis

    let percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
    let percentualRatos = (totalRatos / totalCobaias) * 100;
    let percentualSapos = (totalSapos / totalCobaias) * 100;

    // Imprimindo resultados 

    console.log(`Total: ${totalCobaias} cobaias`);
    console.log(`Total de coelhos: ${totalCoelhos}`);
    console.log(`Total de ratos: ${totalRatos}`);
    console.log(`Total de sapos: ${totalSapos}`);
    console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`);
    console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`);
    console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`);






}
