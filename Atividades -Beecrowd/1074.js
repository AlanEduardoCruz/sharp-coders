var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    // Variaveis

    let totalValores = parseInt(lines.shift());

    // Estrutura

    for (let i = 0; i < totalValores; i++) {
        let valores = parseInt(lines.shift());
        if (valores !== 0) {

            if (valores % 2 === 0 && valores > 0) {
                console.log("EVEN POSITIVE");

            } else if (valores % 2 === 0 && valores < 0) {
                console.log("EVEN NEGATIVE");

            } else if (valores % 2 !== 0 && valores > 0) {
                console.log("ODD POSITIVE");

            } else if (valores % 2 !== 0 && valores < 0) {
                console.log("ODD NEGATIVE");
            }

        } else {
            console.log("NULL");
        }
    }
}


















// let N = parseInt(lines.shift());

// for (let i = 1; i <= N; i++) {
//     let x = parseInt(lines.shift());
//     if (x === 0) {
//       console.log("NULL");
//     } else if (x % 2 === 0) {
//       if (x > 0) {
//         console.log("EVEN POSITIVE");
//       } else {
//         console.log("EVEN NEGATIVE");
//       }
//     } else {
//       if (x > 0) {
//         console.log("ODD POSITIVE");
//       } else {
//         console.log("ODD NEGATIVE");
//       }
//     }
//   }
