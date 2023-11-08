var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
        
            
    //     const meses = [
    //       "Janeiro", "Fevereiro", "Março", "Abril",
    //       "Maio", "Junho", "Julho", "Agosto",
    //       "Setembro", "Outubro", "Novembro", "Dezembro"
    //     ];
      
    //     if (mes >= 1 && mes <= 12) {
    //       console.log(meses[mes - 1]);
    //     } else {
    //       console.log('Valor fora do intervalo válido.');
    //     }      
        
    //   }

    const mes = parseInt(lines.shift());   

    switch(mes){
        case 1: console.log("January"); break;
        case 2: console.log("February"); break;
        case 3: console.log("March"); break;
        case 4: console.log("April"); break;
        case 5: console.log("May"); break;
        case 6: console.log("june"); break;
        case 7: console.log("July"); break;
        case 8: console.log("August"); break;
        case 9: console.log("September"); break;
        case 10: console.log("October"); break;
        case 11: console.log("November"); break;
        case 12: console.log("December"); break;
        default: console.log("Valor fora do intervalo")
    }


  
